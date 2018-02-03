import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Student } from './student.model';
import { CourseService } from '../course/course.service';
import { StudentMap } from '../course/student-map/student-map.model';
import { StudentMapService } from '../course/student-map/student-map.service';
import { StudentCompetenceService } from 'app/shared/competence/student-competence.service';
import { StudentCompetence } from 'app/shared/competence/student-competence.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentService {
  private studentsUrl = 'api/students';
  private currentStudent: Student;
  public loggedStudent: Subject<Student>;

  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private studentMapService: StudentMapService,
    private competenceService: StudentCompetenceService
  ) {
    this.loggedStudent = new Subject<Student>();
  }
  
  public setCurrentStudent(student: Student) {
    this.currentStudent = student;
  }

  public getCurrentStudent(): Student {
    return this.currentStudent;
  }

  public configCurrentStudent(): void {
    this.getStudentByEmail(localStorage.getItem('user'))
    .subscribe(student => {
      if (student) {
        this.currentStudent = student;
        this.setStudentCourses(student.courses);
        this.setStudenMaps(student.maps);
        this.setCurrentStudent(student);
        this.loggedStudent.next(student);
      }
    },
    error => {
      console.error('Error in get Course', error);
    });
  }

  public setStudentCourses(studentCourses) {
  this.currentStudent.courses = [];
  for (let courseId of studentCourses) {
    this.courseService.getCourse(courseId)
      .subscribe(course => {
        if (course) {
          this.currentStudent.courses.push(course);
        }
      },
      error => {
        console.error('Error in get Course', error);
      });
  }
  }

  public setStudenMaps(studentMaps): void { // TODO: make common
  this.currentStudent.maps = [];

  for (let mapId of studentMaps) {
    this.studentMapService.getStudentMap(mapId) // Change to obtain current course 
    .subscribe(map => {
        if (map) {
          let studentMap = new StudentMap(map._id, map.course_id, map.competences, map.connections);
          this.getStudentCompenteces(map.competences).subscribe((competences: StudentCompetence[]) => {
            studentMap.competences = competences;
            this.currentStudent.maps.push(studentMap);
          });
        }
      },
      error => {
        console.error('Error in get Course', error);
      }
    );

  }
  }

  public getStudentCompenteces(competences)  {
  let competenceQueries = [];
  for (let competenceId of competences) {
      let competenceQuery = this.competenceService.getCompetence(competenceId);
      competenceQueries.push(competenceQuery);
  }
  return Observable.forkJoin(competenceQueries);
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
