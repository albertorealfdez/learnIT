import { Component, OnInit } from '@angular/core';

import { Student } from './student.model';
import { User } from '../shared/user.model';
import { StudentService } from './student.service';
import { CourseService } from '../course/course.service';
import { Course } from '../course';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  //public student: Student;
  public student: Student;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    // TODO: change to current student
    this.studentService.getStudentByEmail(localStorage.getItem('user'))
      .subscribe(student => {
        if (student) {
          this.student = student;
          this.setStudentCourses(student.courses);
        }
      },
      error => {
        console.error('Error in get Course', error);
      });
  }

  public setStudentCourses(studentCourses) {
    this.student.courses = [];
    for (let courseId of studentCourses) {
      this.courseService.getCourse(courseId)
        .subscribe(course => {
          if (course) {
            this.student.courses.push(course);
          }
        },
        error => {
          console.error('Error in get Course', error);
        });
    }
  }
}
