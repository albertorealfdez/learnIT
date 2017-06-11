import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Activity } from '../../shared/activity.model';
import { ActivityService } from '../../shared/activity.service';
import { Student, StudentService } from '../../student';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {
  public activity: Activity;
  public selectedAnswer: number;
  public wrongAnswer: boolean;
  public student: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.getCurrentActivity();
    
    // TODO: change to current student
    this.studentService.getStudent(JSON.parse(sessionStorage.getItem('user')))
      .then(student => {
        if (student) {
          this.student = new Student(student.id, student.name, student.email, student.courses, student.activities, student.map); // TODO: check Object.assign
        }
      })
      .catch(error => {
        console.error('Error in get Course', error);
      });
  }

  public getCurrentActivity(): void {
    let activityId: number = this.activatedRoute.snapshot.params['id'];

    this.activityService.getActivity(activityId)
      .subscribe(
        activity => {
          if (activity) {
            this.activity = activity;
          }
        },
        error => {
          console.error('Error in get activity', error);
        }
      );
  }

  public sendAnswer(): void {
    // TODO: use a service
    this.updateCompetences(this.selectedAnswer === 2);

    this.studentService.updateStudent(this.student)
        .then(course => {
          window.history.back(); // TODO: change to current course page
        })
        .catch(error => {
          console.error('Error in update student', error);
        });
  }

  public updateCompetences(isCorrect: boolean): void {
    for (let activityCompetence of this.activity.competences) {
      for (let competence of this.student.map.competences) {
        if (activityCompetence.id === competence.id) {
          if (isCorrect) {
            competence.force += (this.activity.difficulty * 10);
          } else {
            competence.force -= (this.activity.difficulty * 10);
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
