import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DashboardCourseService } from './';
import { Competence } from '../../shared/competence/competence.model';
import { Course } from '../../course/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './dashboard-course.component.html',
  styleUrls: ['./dashboard-course.component.scss']
})

export class DashboardCourseComponent implements OnInit {
  public course: Course;
  public showNewCompetence: boolean;

  constructor(
    private courseService: DashboardCourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseKey: string = this.route.snapshot.params['key'];

    this.courseService.getCourseByKey(courseKey)
      .subscribe(course => {
        if (course) {
          this.course = course;
        }
      },
      error => {
        console.error('Error in get Course', error);
      });
  }

  public addCompetence(): void {
    this.showNewCompetence = true;
    this.course.competences.push(new Competence());
  }

  public removeLastCompetence(): void {
    this.showNewCompetence = false;
    this.course.competences.pop();
  }

}
