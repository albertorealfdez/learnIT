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
    this.svg = d3.select("svg");
    
    var width = +this.svg.attr("width");
    var height = +this.svg.attr("height");

    this.color = d3.scaleOrdinal(d3.schemeCategory20);
    
    this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d: any) { return d._id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    // Temporal
    this.studentMap.connections = [
      { "source": "5a2adaab975a6d4285359f0a", "target": "5a2adaab975a6d4285359f0b"}
    ];
    this.render();
  }

  ticked() {
    this.link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    this.node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
  
  public render() {
    this.link = this.svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(this.studentMap.connections)
    .enter().append("line")
      .attr("stroke-width", 2)
      .attr("stroke", "black");
    
    this.node = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.studentMap.competences)
      .enter().append("circle")
        .attr("r", 5)
        .attr("fill", (d)=> { return this.color(d.group); })
        .call(d3.drag()
            .on("start", (d)=>{return this.dragstarted(d)})
            .on("drag", (d)=>{return this.dragged(d)})
            .on("end", (d)=>{return this.dragended(d)}));

    this.node.append("title")
      .text(function(d) { return d._id; });

    this.simulation
      .nodes(this.studentMap.competences)
      .on("tick", ()=>{return this.ticked()});

    this.simulation.force("link")
      .links(this.studentMap.connections);  
  }
  
  dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  
  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  dragstarted(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  public checkCompetence(compentence: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentence);

    if (activity) {
      this.router.navigate(['/activity', activity._id]);
    }
  }

}
