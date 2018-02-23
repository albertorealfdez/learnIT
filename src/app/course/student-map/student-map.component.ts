import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

import { StudentCompetence, Activity } from 'app/shared';
import { StudentMap } from './student-map.model';
import { SelectionEngineService } from 'app/selection-engine/selection-engine.service';
import { Student } from 'app/student/student.model';
import { Course } from '../course.model';

@Component({
  selector: 'app-student-map',
  templateUrl: './student-map.component.html',
  styleUrls: ['./student-map.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  private nodeRadius = 30;

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
        .force('link', d3.forceLink().id(function(node: any) { return node._id; }))
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

  public getCompetenceClass(competence: any): string {
    return `student-map__competence student-map__competence--${competence.completed ? 'completed' : competence.locked ? 'locked' : 'unlocked' }`;
  }

  public getLabelClass(competence: any): string {
    return `student-map__competence__label ${competence.locked ? 'student-map__competence__label--locked' : '' }`;
  }

  public processNodePositions(): void {      
    for (let i in this.nodes) {
      let index:number = parseInt(i);
      
      if (index === 0) {
        this.nodes[index].x = this.startX;
        this.nodes[index].y = this.startY;
      } else {
        let deltaY = index % 2 === 0 ? index + 100 : index - 100;

        this.nodes[index].x = this.nodes[index-1].x + index + 120;
        this.nodes[index].y = this.nodes[index-1].y + deltaY;
      }
    }
  }

  public processLinksPositions(): void {      
    for (let link of this.links) {
      let source = this.nodes.filter(node => node._id === link.source._id)[0];
      let target = this.nodes.filter(node => node._id === link.target._id)[0];

      link.source.x = source.x;
      link.source.y = source.y;
      link.target.x = target.x;
      link.target.y = target.y;

      link.labelX = link.source.x + this.nodeRadius + 10;

      if (link.target.y < link.source.y) {
        link.labelY = link.target.y + this.nodeRadius / 2;
      } else {
        link.labelY = link.target.y - this.nodeRadius / 2;        
      }
    }
  }
  
  public render() {
    this.processNodePositions();

    this.node = this.svg.append('g')
      .selectAll('circle')
      .data(this.nodes)
      .enter()
      .append('circle')
          .attr('class', (node) => { return this.getCompetenceClass(node); })
          .attr('title', (node) => { return node.title; })
          .attr('r', this.nodeRadius)
          .attr('cx', (node) => { return node.x; })
          .attr('cy', (node) => { return node.y; })
      .on('click', (node) => {
        this.checkCompetence(node);
      })
    
    this.node.append("title")
      .text((node) => { return node.title });

    let label = this.svg.append('g')
      .selectAll('text')
      .data(this.nodes)
      .enter()
      .append('text')
        .attr('class', (node) => { return this.getLabelClass(node); })
        .attr('x', (node) => { return node.x - this.nodeRadius/4; })
        .attr('y', (node) => { return node.y; })
        .text((node) => { return node.key; });
    
    let status = this.svg.append('g')
        .selectAll('text')
        .data(this.nodes)
        .enter()
      .append('text')
        .attr('class', 'student-map__competence__status')
        .attr('x', (node) => { return node.x - this.nodeRadius/2; })
        .attr('y', (node) => { return node.y + this.nodeRadius + this.nodeRadius/2; })
        .text((node) => { return `${node.force}/${node.minThreshold}`; });

    this.link = this.svg.append('g')
      .selectAll('line')
      .data(this.links)
      .enter()
        .append('line')
          .attr('class', 'student-map__connection')
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
        .attr('x1', (link) => { return link.source.x + this.nodeRadius; })
        .attr('y1', (link) => { return link.source.y; })
        .attr('x2', (link) => { return link.target.x - this.nodeRadius; })
        .attr('y2', (link) => { return link.target.y; });

    let linkThreshold = this.svg.append('g')
      .selectAll('text')
      .data(this.links)
      .enter()
        .append('text')
          .attr('class', 'student-map__connection__label')
          .attr('font-size', 16)
          .attr('x', (link) => { return link.labelX; })
          .attr('y', (link) => { return link.labelY; })
          .text((link) => { return link.threshold; });
          
    console.log(this.links);
  }
}
