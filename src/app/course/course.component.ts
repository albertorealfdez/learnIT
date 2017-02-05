import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  public course: Course;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute  
  ) {}

  ngOnInit() {
    //this.course = new Course();
    this.getCurrentCourse();
  }

  public getCurrentCourse(): void {
    let courseId: number = this.route.snapshot.params['id'];

    this.courseService.getCourseById(courseId)
      .then(course => {
        if (course) {
          this.course = course;
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }

}
