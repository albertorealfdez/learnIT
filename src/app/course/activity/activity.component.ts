import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Activity } from '../../shared/activity/activity.model';
import { ActivityService } from '../../shared/activity/activity.service';
import { Student, StudentService } from '../../student';
import { SelectionEngineService } from '../../selection-engine/selection-engine.service';
import { StudentCompetenceService } from '../../shared/competence/student-competence.service';
import { StudentCompetence } from 'app/shared';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {
  public activity: Activity;
  public selectedAnswer: string;
  public wrongAnswer: boolean;
  public student: Student;
  private changedCompetences: StudentCompetence[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private studentService: StudentService,
    private selectionService: SelectionEngineService,
    private competenceService: StudentCompetenceService
  ) {}

  ngOnInit() {
    this.getCurrentActivity();
    this.getCurrentStudent();
    this.changedCompetences = [];
  }

  public getCurrentStudent() {
    // TODO: change to current student
    this.student = this.studentService.getCurrentStudent();    
  }

  public getCurrentActivity(): void {
    let activityId: string = this.activatedRoute.snapshot.params['id'];

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

  public sendAnswer(): void { // TODO: move performance to back-end
    let correctAsnwer = this.activity.choices[this.activity.correct];
    let isCorrect = correctAsnwer === this.selectedAnswer;
    this.selectionService.processCompetences(isCorrect, this.activity, this.student);

    for (let competenceId of this.activity.competences) {
      let updatedCompetence: StudentCompetence = this.student.maps[0].competences.filter(competence => competence._id === competenceId)[0];
      this.processConnections(updatedCompetence);
      this.changedCompetences.push(updatedCompetence);
    }
    this.updateCompetences();
    this.activity.started = false; 
    // Set updated activity
    this.student.activities.push(this.activity._id);
    
    this.studentService.updateStudentActivities(this.student)
      .subscribe(response => {
      },
      error => {
        console.error('Error in update student', error);
      });
    window.history.back(); // TODO: change to current course page
  }

  public processConnections(updatedCompetence: StudentCompetence): void {
    let competenceConnections = this.student.maps[0].connections.filter(
      connection => connection.source._id === updatedCompetence._id
    );

    for (let connection of competenceConnections) {
      if (updatedCompetence.force >= connection.threshold) {
        let targetCompetence: StudentCompetence = this.student.maps[0].competences.filter(
          target => connection.target._id === target._id
        )[0];
        targetCompetence.locked = false;
        this.changedCompetences.push(targetCompetence);
      }
    }
  }

  public updateCompetences(): void {
    for (let competence of this.changedCompetences) {
      this.competenceService.updateCompetence(competence)
        .subscribe(competence => {
        },
        error => {
          console.error('Error updating competence', error);
        });
    }
  }
}
