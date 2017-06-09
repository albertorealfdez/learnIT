import { Component, OnInit } from '@angular/core';

import {
  Student,
  StudentService
} from './';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  public student: Student;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    // TODO: change to current student
    this.studentService.getStudent(JSON.parse(sessionStorage.getItem('user')))
      .then(student => {
        if (student) {
          this.student = new Student(student.id, student.name, student.email, student.courses, student.activities, student.map); // TODO: check Object.assign
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }
}
