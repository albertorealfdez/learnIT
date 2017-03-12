import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Course,
  CourseService
} from './';

import { Competence } from './competence';
import { Activity } from './activity';
import {
  Student,
  StudentService
} from '../student';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    // TODO: change to current student
    this.studentService.getStudent(1)
      .then(student => {
        if (student) {
          this.student = student; // TODO: check Object.assign
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });

    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseId: number = this.activatedRoute.snapshot.params['id'];

    this.courseService.getCourse(courseId)
      .then(course => {
        if (course) {
          this.course = course; // TODO: check Object.assign
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }

  public checkCompetence(compentece: Competence): void {
    let activity: Activity = this.getNextActivity(compentece);

    if (activity) {
      this.router.navigate(['activity', activity.id]);
    }
  }

  // TODO: change to selection service
  public getNextActivity(competence: Competence): Activity {
    for (let courseActivity of this.course.activities) {
      if (this.elementExists(competence, courseActivity.competences) && !this.elementExists(courseActivity, this.student.activities)) {
        this.student.activities.push(courseActivity);
        this.studentService.updateStudent(this.student)
          .then(course => {
            console.log('OK');
          })
          .catch(error => {
            console.error('Error in get Course', error);
          });;
        return courseActivity;
      }
    }
  }

  // TODO: move to shared module
  public elementExists<T extends Competence | Activity>(element: T, elementArray: T[]): boolean {
    for (let arrayElement of elementArray) {
      if (element.id === arrayElement.id) {
        return true;
      }
    }
    return false;
  }
}
