import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Utils, ActivityService } from '../shared/';

import { Activity } from '../shared/activity/activity.model';
import { StudentCompetence } from '../shared/competence/student-competence.model';
import { Course } from '../course/course.model';
import { Student } from '../student/student.model';
import { StudentService } from '../student/student.service';
import { StudentCompetenceService } from 'app/shared/competence/student-competence.service';
import { active } from 'd3';

@Injectable()
export class SelectionEngineService {

  constructor(
    private http: HttpClient,
    private studentService: StudentService,
    private activityService: ActivityService
  ) { }

  // TODO: change to the corresponding api call
  //       change obtention to available and done activities
  public getNextActivity(student: Student, course: Course, competence: StudentCompetence): Activity {
    let startedActivity: Activity = course.activities.filter(activity => activity.started)[0];

    if (startedActivity && this.isValidActivity(startedActivity, competence, student)) {
      console.log(startedActivity.key, ' is started!');
      return startedActivity;
    } else {
      for (let courseActivity of course.activities) {
        if (this.isValidActivity(courseActivity, competence, student)) {
          courseActivity.started = true;

          // Set updated activity
          return courseActivity;
        }
      }
    }
  }

  public isValidActivity(activity: Activity, competence: StudentCompetence, student: Student): boolean {
    return activity.competences.indexOf(competence._id) !== -1 && student.activities.indexOf(activity._id) === -1;
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
