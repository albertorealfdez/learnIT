import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { 
  Course,
  CourseService,
  Competence
} from './';

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

  public addCompetence(): void {
    this.course.competences.push(new Competence());
  }

}
