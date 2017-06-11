import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher.model';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public teacher: Teacher;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.teacher = new Teacher(1, 'Alberto', 'albertorealfdez@gmail.com'); // TODO: Change
    this.courseService.getCourses()
      .subscribe(
        courses => {
          if (courses) {
            this.teacher.courses = courses;
          }
        },
        error => {
          console.error('Error in get Courses', error);
        }
      );
  }

}
