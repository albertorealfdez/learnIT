import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Utils } from '../shared/';

import { Activity } from '../shared/activity/activity.model';
import { StudentCompetence } from '../shared/competence/student-competence.model';
import { Course } from '../course/course.model';
import { Student } from '../student/student.model';
import { StudentService } from '../student/student.service';

@Injectable()
export class SelectionEngineService {

  constructor(
    private http: Http,
    private studentService: StudentService
  ) { }

  // TODO: change to the corresponding api call
  public getNextActivity(student: Student, course: Course, competence: StudentCompetence): Activity {
    for (let courseActivity of course.activities) {
      if (Utils.elementExists(competence, courseActivity.competences) && !Utils.elementExists(courseActivity, student.activities)) {
        student.activities.push(courseActivity);
        this.studentService.updateStudent(student)
          .subscribe(response => {
            console.log('Student updated');
          },
          error => {
            console.error('Error in update student', error);
          });
        return courseActivity;
      }
    }
  }
}
