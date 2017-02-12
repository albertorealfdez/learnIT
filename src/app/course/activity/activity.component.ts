import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from './activity.model';
import { ActivityService } from './activity.service';
import { CompetenceService } from '../competence/competence.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;

  constructor(
    private activityService: ActivityService,
    private competenceService: CompetenceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCurrentActivity();
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

}
