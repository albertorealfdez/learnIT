import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course.model';

@Injectable()
export class CourseService {
  private coursesUrl = 'api/courses';

  constructor(private http: Http) { }

  public getCourses(): Promise<Course[]> {
    return this.http.get(this.coursesUrl)
      .toPromise()
      .then(response => {
        return response.json().data as Course[];
      })
      .catch(this.handleError);
  }

  public getCourse(id: number): Promise<Course> {
    const url = `${this.coursesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Course;
      })
      .catch(this.handleError);
  }

  public updateCourse(course: Course): Promise<Course> {
    const url = `${this.coursesUrl}/${course.id}`;

    return this.http.put(url, course)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
