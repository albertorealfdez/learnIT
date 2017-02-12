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
  @Input() activity: Activity;

  public currentCompetences: Competence[];

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
        }
      })
      .catch(error => {
        console.error('Error in get activity', error);
      });
  }

}
