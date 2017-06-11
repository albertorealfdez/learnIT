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
          .then(response => {
            console.log('Student updated');
          })
          .catch(error => {
            console.error('Error in update student', error);
          });
        return courseActivity;
      }
    }
  }

  public updateCompetences(answer: number, activity: Activity, student: Student): void {
    let isCorrect = answer === 2; // TODO: change to real service call

    for (let activityCompetence of activity.competences) {
      for (let competence of student.map.competences) {
        if (activityCompetence.id === competence.id) {
          if (isCorrect) {
            competence.force += (activity.difficulty * 10);
          } else {
            competence.force -= (activity.difficulty * 10);
          }
          if (competence.force > 0) {
            competence.unlocked = true;
          }

          if (competence.force >= competence.threshold) {
            competence.completed = true;
          } else {
            competence.completed = false;
          }
        }
      }
    }
  }
}
