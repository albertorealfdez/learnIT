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

  svg;
  color;
  simulation;
  link;
  node;
  
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
    let startX = width / 3;
    let startY = height /3;

    this.color = d3.scaleOrdinal(d3.schemeCategory20);
    
    this.simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(function(d: any) { return d._id; }))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(startX, startY));

    // Temporal
    /*this.studentMap.connections = [
      { 'source': '5a2adaab975a6d4285359f0a', 'target': '5a2adaab975a6d4285359f0b'}
    ];*/
    this.render();
  }

  ticked() {
    this.link
        .attr('x1', (d) => { return d.source.x; })
        .attr('y1', (d) => { return d.source.y; })
        .attr('x2', (d) => { return d.target.x; })
        .attr('y2', (d) => { return d.target.y; });

    this.node
        .attr('cx', (d) => { return d.x; })
        .attr('cy', (d) => { return d.y; });
  }
  
  public render() {
    this.link = this.svg.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(this.studentMap.connections)
    .enter()
      .append('line')
        .attr('stroke-width', 5)
        .attr('stroke', 'black')
        .attr('marker-end', 'url(#end-arrow)')
    
    this.node = this.svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(this.studentMap.competences)
      .enter()
        .append('circle')
          .attr('r', 30)
          .attr('fill', (d)=> { return this.color(d.group); })
        
        
    this.svg.append('svg:defs').append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    this.node.append('title')
      .text(function(d) { return d._id; });

    this.simulation
      .nodes(this.studentMap.competences)
      .on('tick', ()=>{return this.ticked()});

    this.simulation.force('link')
      .links(this.studentMap.connections);  
  }

  public checkCompetence(compentence: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentence);

    if (activity) {
      this.router.navigate(['/activity', activity._id]);
    }
  }

}
