import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  private studentsUrl = 'api/students';
  private currentStudent: Student;

  constructor(private http: HttpClient) {}
  
  public setCurrentStudent(student: Student) {
    this.currentStudent = student;
  }

  public getCurrentStudent(): Student {
    return this.currentStudent;
  }

  public getStudent(id: string): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.get(url)
      .map(response => response as Student)
      .catch(this.handleError);
  }

  public getStudentByEmail(email: string): Observable<Student> {
    const url = `${this.studentsUrl}?email=${email}`;

    return this.http.get(url)
      .map(response => response as Student)
      .catch(this.handleError);
  }

  public updateStudentActivities(student: Student): Observable<Student> {
    return this.updateField(student._id, { activities: student.activities});
  }

  public updateField(studentId: string, fields: any) {
    const url = `${this.studentsUrl}/${studentId}`;

    return this.http.patch(url, fields)
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
