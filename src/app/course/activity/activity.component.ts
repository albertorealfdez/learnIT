import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Activity } from '../../shared/activity.model';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {
  public activity: Activity;
  public selectedAnswer: number;

  constructor(
    private activityService: ActivityService,
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

  public sendAnswer() {
    // TODO: use a service
    if (this.selectedAnswer === 2) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }
  }
}
