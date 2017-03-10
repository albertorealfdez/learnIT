import { Component, OnInit } from '@angular/core';

import { Student } from './student.model';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  public student: Student;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.student = new Student(1, 'Alberto', 'albertorealfdez@gmail.com');

    this.courseService.getCourses()
      .then(courses => {
        if (courses) {
          this.student.courses = courses;
        }
      })
      .catch(error => {
        console.error('Error in get Courses', error);
      });
  }

}
