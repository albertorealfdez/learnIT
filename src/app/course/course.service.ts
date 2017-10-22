import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Course } from './course.model';

@Injectable()
export class CourseService {
  private coursesUrl = 'api/courses';

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get(this.coursesUrl)
      .map(response => {
        return response as Course[];
      })
      .catch(this.handleError);
  }

  public getCourse(id: string): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response as Course;
      })
      .catch(this.handleError);
  }

  public getCourseByKey(key: string): Observable<Course> {
    const url = `${this.coursesUrl}?key=${key}`;

    return this.http.get(url)
      .map(response => {
        return response[0] as Course;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
