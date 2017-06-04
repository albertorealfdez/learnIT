import { StudentCompetence } from '../student/student-competence.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Course,
  CourseService
} from './';

import { Competence } from '../shared/competence.model';
import { Activity } from '../shared/activity.model';
import {
  Student,
  StudentService,
  StudentMap
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
    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseKey: string = this.activatedRoute.snapshot.params['key'];

    this.courseService.getCourseByKey(courseKey)
      .then(course => {
        if (course) {
          this.course = course; // TODO: check Object.assign
          this.getCurrentStudent();
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }

  public getCurrentStudent(): void {
    // TODO: change to current student
    this.studentService.getStudent(JSON.parse(sessionStorage.getItem('user')))
      .then(student => {
        if (student) {
          this.student = new Student(student.id, student.name, student.email, student.courses, student.activities, student.map); // TODO: check Object.assign

          // TODO: change this obtention
          if (!this.student.map.competences.length) {
            this.student.map = new StudentMap(this.course.competences);
          }
          this.student.map.competences[0].unlocked = true; // TODO: automatically
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }

  public checkCompetence(compentece: StudentCompetence): void {
    let activity: Activity = this.getNextActivity(compentece);

    if (activity) {
      this.router.navigate(['activity', activity.id]);
    }
  }

  // TODO: change to selection service
  public getNextActivity(competence: StudentCompetence): Activity {
    for (let courseActivity of this.course.activities) {
      if (this.elementExists(competence, courseActivity.competences) && !this.elementExists(courseActivity, this.student.activities)) {
        this.student.activities.push(courseActivity);
        this.studentService.updateStudent(this.student)
          .then(course => {
            console.log('OK');
          })
          .catch(error => {
            console.error('Error in update student', error);
          });
        return courseActivity;
      }
    }
  }

  // TODO: move to shared module
  public elementExists<T extends Competence | StudentCompetence | Activity>(element: T, elementArray: T[]): boolean {
    for (let arrayElement of elementArray) {
      if (element.id === arrayElement.id) {
        return true;
      }
    }
    return false;
  }
}
