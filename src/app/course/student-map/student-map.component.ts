import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import * as d3 from 'd3';

import { StudentCompetence, Activity } from 'app/shared';
import { StudentMap } from './student-map.model';
import { SelectionEngineService } from 'app/selection-engine/selection-engine.service';
import { Student } from 'app/student/student.model';
import { Course } from '../course.model';

@Component({
  selector: 'app-student-map',
  templateUrl: './student-map.component.html',
  styleUrls: ['./student-map.component.scss']
})

export class StudentMapComponent implements OnInit, AfterViewInit {
  @Input() studentMap: StudentMap;
  @Input() student: Student;
  @Input() course: Course;

  private svg;
  private color;
  private simulation;
  private startX;
  private startY;
  
  private link;
  private node;
  private nodes;
  private links;

  constructor(
    private selectionService: SelectionEngineService,
    private router: Router
  ) {}
  
  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.svg = d3.select('svg');
    
    let width = +this.svg.attr('width');
    let height = +this.svg.attr('height');
    this.startX = width / 3;
    this.startY = height / 3;

    this.color = d3.scaleOrdinal(d3.schemeCategory20);

    this.simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(function(d: any) { return d._id; }))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(this.startX, this.startY));

    this.nodes = Object.assign(this.studentMap.competences);
    this.links = Object.assign(this.studentMap.connections);

    this.render();
  }

  public checkCompetence(compentence: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentence);

    if (activity) {
      this.router.navigate(['/activity', activity._id]);
    }
  }

  public processNodePositions() {      
    for (let i in this.nodes) {
      let index:number = parseInt(i);
      
      if (index === 0) {
        this.nodes[index].x = this.startX;
        this.nodes[index].y = this.startY;
      } else {
        let deltaY = index % 2 === 0 ? index + 100 : index - 100;

        this.nodes[index].x = this.nodes[index-1].x + index + 100;
        this.nodes[index].y = this.nodes[index-1].y + deltaY;
      }
    }
  }

  public processLinksPositions() {      
    for (let link of this.links) {
      let source = this.nodes.filter(node => node._id === link.source._id)[0];
      let target = this.nodes.filter(node => node._id === link.target._id)[0];

      link.source.x = source.x;
      link.source.y = source.y;
      link.target.x = target.x;
      link.target.y = target.y;
    }
  }
  
  public render() {
    let radius = 30;
    this.processNodePositions();

    this.node = this.svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(this.nodes)
      .enter()
        .append('circle')
          .attr('r', radius)
          .attr('fill', (d) => { return this.color(d.group); })
          .attr('cx', (d) => { return d.x; })
          .attr('cy', (d) => { return d.y; })

    this.link = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.links)
      .enter()
        .append('line')
          .attr('stroke-width', 3)
          .attr('stroke', 'black')
          .attr('marker-end', 'url(#end-arrow)'); 
        
    this.svg.append('svg:defs').append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 4)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    this.simulation
      .nodes(this.nodes);

    this.simulation.force('link')
      .links(this.links); 
      
    this.processLinksPositions();

    this.link
        .attr('x1', (d) => { return d.source.x + radius; })
        .attr('y1', (d) => { return d.source.y; })
        .attr('x2', (d) => { return d.target.x - radius; })
        .attr('y2', (d) => { return d.target.y; });
  }
}
