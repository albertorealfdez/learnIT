import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { Student } from './student.model';
import { User } from '../shared/user.model';
import { StudentMap } from '../course/student-map';
import { StudentService } from './student.service';
import { CourseService } from '../course/course.service';
import { Course } from '../course';
import { StudentMapService } from '../course/student-map/student-map.service';
import { StudentCompetenceService } from '../shared/competence/student-competence.service';
import { StudentCompetence } from '../shared/competence';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  //public student: Student;
  public student: Student;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private studentMapService: StudentMapService,
    private competenceService: StudentCompetenceService
  ) { }

  ngOnInit() {
    // TODO: change to current student
    /* this.studentService.getStudentByEmail(localStorage.getItem('user'))
      .subscribe(student => {
        if (student) {
          this.student = student;
          this.setStudentCourses(student.courses);
          this.setStudenMaps(student.maps);
          this.studentService.setCurrentStudent(this.student);
        }
      },
      error => {
        console.error('Error in get Course', error);
      }); */
      this.studentService.configCurrentStudent();
      this.studentService.loggedStudent.subscribe(student => {
        this.student = student;
      });
  }

  public setStudentCourses(studentCourses) {
    this.student.courses = [];
    for (let courseId of studentCourses) {
      this.courseService.getCourse(courseId)
        .subscribe(course => {
          if (course) {
            this.student.courses.push(course);
          }
        },
        error => {
          console.error('Error in get Course', error);
        });
    }
  }

  public setStudenMaps(studentMaps): void { // TODO: make common
    this.student.maps = [];
    for (let mapId of studentMaps) {
      this.studentMapService.getStudentMap(mapId) // Change to obtain current course 
      .subscribe(map => {
          if (map) {
            let studentMap = new StudentMap(map._id, map.course_id, map.competences);
            this.getStudentCompenteces(map.competences).subscribe((competences: StudentCompetence[]) => {
              studentMap.competences = competences;
              this.student.maps.push(studentMap);
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
}
