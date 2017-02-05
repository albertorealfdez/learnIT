import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher.model';
import { CourseService } from '../course/course.service';

@Component({
  moduleId: module.id,
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teacher: Teacher;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.teacher = new Teacher(1, 'Alberto', 'albertorealfdez@gmail.com');
    this.courseService.getCourses()
      .then(courses => {
        if (courses) {
          this.teacher.courses = courses;
        }
      })
      .catch(error => {
        console.error('Error in get Courses', error);
      });
  }

}
