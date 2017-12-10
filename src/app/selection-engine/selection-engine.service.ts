import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Utils } from '../shared/';

import { Activity } from '../shared/activity/activity.model';
import { StudentCompetence } from '../shared/competence/student-competence.model';
import { Course } from '../course/course.model';
import { Student } from '../student/student.model';
import { StudentService } from '../student/student.service';

@Injectable()
export class SelectionEngineService {

  constructor(
    private http: HttpClient,
    private studentService: StudentService
  ) { }

  // TODO: change to the corresponding api call
  //       change obtention to available and done activities
  public getNextActivity(student: Student, course: Course, competence: StudentCompetence): Activity {
    for (let courseActivity of course.activities) {
      if ((courseActivity.competences.indexOf(competence._id) !== -1) && student.activities.indexOf(courseActivity._id) === -1) {
        student.activities.push(courseActivity._id);
        
        this.studentService.updateStudentActivities(student)
          .subscribe(response => {
          },
          error => {
            console.error('Error in update student', error);
          });
        return courseActivity;
      }
    }
  }

  public processCompetences(isCorrect: boolean, activity: Activity, student: Student): void {
    for (let activityCompetence of activity.competences) {
      for (let competence of student.maps[0].competences) { // TODO: change index to current map
        if (activityCompetence === competence._id) {
          if (isCorrect) {
            competence.force += (activity.difficulty * 10);
          } else {
            competence.force -= (activity.difficulty * 10);
          }
          if (competence.force > 0) {
            competence.locked = true;
          }
          if (competence.force >= competence.minThreshold) {
            competence.completed = true;
          } else {
            competence.completed = false;
          }
        }
      }
    }
  }
}
