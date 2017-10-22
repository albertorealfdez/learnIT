import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './course.model';
import { CourseService } from './course.service';

import { StudentCompetence } from '../shared/competence/student-competence.model';
import { Activity } from '../shared/activity/activity.model';
import {
  Student,
  StudentService,
  StudentMap
} from '../student';
import { SelectionEngineService } from '../selection-engine/selection-engine.service';

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
    private studentService: StudentService,
    private selectionService: SelectionEngineService
  ) {}

  ngOnInit() {
    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseKey: string = this.activatedRoute.snapshot.params['key'];

    this.courseService.getCourseByKey(courseKey)
      .subscribe(
        course => {
          if (course) {
            this.course = course; // TODO: check Object.assign
            this.getCurrentStudent();
          }
        },
        error => {
        console.error('Error in get Course', error);
        }
      );
  }

  public getCurrentStudent(): void {
    // TODO: change to current student
    this.studentService.getStudent(localStorage.getItem('user'))
      .subscribe(student => {
        if (student) {
          this.student = new Student(student._id, student.name, student.email, student.courses, student.activities, student.map); // TODO: check Object.assign

          // TODO: change this obtention
          if (!this.student.map.competences.length) {
            this.student.map = new StudentMap(this.course.competences);
          }
          this.student.map.competences[0].unlocked = true; // TODO: automatically
        }
      },
      error => {
        console.error('Error in get Course', error);
      });
  }

  public checkCompetence(compentece: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentece);

    if (activity) {
      this.router.navigate(['activity', activity.id]);
    }
  }
}
