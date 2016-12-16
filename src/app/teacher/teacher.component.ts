import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher.model';
import { CourseService } from '../course/course.service';

@Component({
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
        console.log('Courses: ', courses);          
        if (courses) {
          this.teacher.courses = courses;
        }
      });
  }

}
