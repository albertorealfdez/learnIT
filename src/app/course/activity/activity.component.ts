import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from './activity.model';
import { ActivityService } from './activity.service';
import {
  Competence,
  CompetenceService
} from '../competence';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {
  public activity: Activity;
  public currentCompetences: Competence[];
  public selectedCompetence: number;

  constructor(
    private activityService: ActivityService,
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
