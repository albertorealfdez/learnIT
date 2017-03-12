import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  private studentsUrl = 'api/students';

  constructor(private http: Http) {}

  public getStudent(id: number): Promise<Student> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Student)
      .catch(this.handleError);
  }

  public updateStudent(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/${student.id}`;

    return this.http.put(url, student)
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
