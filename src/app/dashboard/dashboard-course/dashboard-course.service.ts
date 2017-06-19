import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Course } from '../../course/course.model';

@Injectable()
export class DashboardCourseService {
  private coursesUrl = 'api/courses';

  constructor(private http: Http) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get(this.coursesUrl)
      .map(response => {
        return response.json().data as Course[];
      })
      .catch(this.handleError);
  }

  public getCourse(id: number): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response.json().data as Course;
      })
      .catch(this.handleError);
  }

  public getCourseByKey(key: string): Observable<Course> {
    const url = `${this.coursesUrl}?key=${key}`;

    return this.http.get(url)
      .map(response => {
        return response.json().data[0] as Course;
      })
      .catch(this.handleError);
  }

  public updateCourse(course: Course): Observable<Course> {
    const url = `${this.coursesUrl}/${course.id}`;

    return this.http.put(url, course)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
