import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  private studentsUrl = 'api/students';

  constructor(private http: Http) {}

  public getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.get(url)
      .map(response => response.json().data as Student)
      .catch(this.handleError);
  }

  public updateStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student._id}`;

    return this.http.put(url, student)
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
