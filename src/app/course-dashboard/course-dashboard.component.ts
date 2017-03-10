import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './';
import { Competence } from './competence';
import { Course } from '../course/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.scss']
})

export class CourseDashboardComponent implements OnInit {
  public course: Course;
  public showNewCompetence: boolean;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseId: number = this.route.snapshot.params['id'];

    this.courseService.getCourse(courseId)
      .then(course => {
        if (course) {
          this.course = course;
        }
      })
      .catch(error => {
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
