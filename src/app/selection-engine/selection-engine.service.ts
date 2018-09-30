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
          competence.force = this.computeValue(0, isCorrect, competence.force, activity.difficulty);
          
          if (competence.force >= competence.minThreshold) {
            competence.completed = true;
          } else {
            competence.completed = false;
          }
        }
      }
    }
  }

  // TODO: change to current selection algorythm
  public computeValue(type: number, isCorrect: boolean, competenceForce: number, activityDifficulty: number): number {
    let value: number;
    let factor: number = isCorrect ? 1 : -1;

    switch(type) {
      case 0:
        value = competenceForce + factor * activityDifficulty * 10;      
        break;       
      default:
        value = competenceForce + factor * activityDifficulty;            
    }
    return value;
  }
}
