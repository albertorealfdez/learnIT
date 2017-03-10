import { Student } from '../student/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Course,
  CourseService
} from './';

import { Competence } from './competence';
import { Activity } from './activity';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {
  public course: Course;
  public showNewCompetence: boolean;
  public student: Student;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.student = new Student(1, 'Alberto', 'alberto@al.es'); // TODO: change to current student
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

  public checkCompetence(compentece: Competence): void {
    console.log(this.course, this.student)
    this.getNextActivity(compentece);
  }

  // TODO: change to selection service
  public getNextActivity(competence: Competence): Activity {
    let activity: Activity;

    for (let courseActivity of this.course.activities) {
      console.log(courseActivity.competences.indexOf(competence));
      if (courseActivity.competences.indexOf(competence) != -1) {
        console.log('Next: ', courseActivity.key);
        this.student.activities.push(courseActivity);
      }
    }

    return activity;
  }
}
