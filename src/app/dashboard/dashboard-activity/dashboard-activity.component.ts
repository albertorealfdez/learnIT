import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../../shared/activity.model';
import { Competence } from '../../shared/competence.model';
import { DashboardActivityService } from './dashboard-activity.service';
import {
  DashboardCompetenceService
} from '../dashboard-competence';

@Component({
  selector: 'app-activity',
  templateUrl: './dashboard-activity.component.html',
  styleUrls: ['./dashboard-activity.component.scss']
})

export class DashboardActivityComponent implements OnInit {
  public activity: Activity;
  public currentCompetences: Competence[];
  public selectedCompetence: number;

  constructor(
    private activityService: DashboardActivityService,
    private competenceService: DashboardCompetenceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentCompetences = [];

    this.getCurrentActivity();
    this.getCurrentCompetences();
  }

  public getCurrentActivity(): void {
    let activityId: number = this.route.snapshot.params['id'];

    this.activityService.getActivity(activityId)
      .then(activity => {
        if (activity) {
          this.activity = activity;
        }
      })
      .catch(error => {
        console.error('Error in get activity', error);
      });
  }

  public getCurrentCompetences(): void {
    this.competenceService.getAllCompetences()
      .then(competences => {
        if (competences) {
          this.currentCompetences = competences;
          this.selectedCompetence = this.currentCompetences[0].id;
        }
      })
      .catch(error => {
        console.error('Error in get activity', error);
      });
  }

  public addCompetence() {
    if (this.selectedCompetence) {
      console.log('Adding: ', this.selectedCompetence);
    }
  }

  public createOrUpdateactivity() {
    this.activityService.updateActivity(this.activity)
    .then(competence => {
        console.log('Updated');
      })
      .catch(error => {
        console.error('Error in updateActivity', error);
      });
  }

}