import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../../shared/activity/activity.model';
import { Competence } from '../../shared/competence/competence.model';
import { DashboardActivityService } from './dashboard-activity.service';
import { ActivityService } from '../../shared/activity/activity.service';
import {
  DashboardCompetenceService
} from '../dashboard-competence';
import { CompetenceService } from '../../shared/competence/competence.service';

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
    private dashboardActivityService: DashboardActivityService,
    private activityService: ActivityService,
    private dashboardCompetenceService: DashboardCompetenceService,
    private competenceService: CompetenceService,
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

  public getCurrentCompetences(): void {
    this.competenceService.getAllCompetences()
      .subscribe(
        competences => {
          if (competences) {
            this.currentCompetences = competences;
            this.selectedCompetence = this.currentCompetences[0].id;
          }
        },
        error => {
          console.error('Error in get activity', error);
      });
  }

  public addCompetence() {
    if (this.selectedCompetence) {
      console.log('Adding competence: ', this.selectedCompetence);
    }
  }

  public createOrUpdateactivity() {
    this.dashboardActivityService.updateActivity(this.activity)
      .then(competence => {
      })
      .catch(error => {
        console.error('Error in updateActivity', error);
      });
  }

}
