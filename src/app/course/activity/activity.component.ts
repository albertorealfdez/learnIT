import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
  ) {}

  ngOnInit() {
    this.getCurrentActivity();
  }

  public getCurrentActivity(): void {
    let activityId: number = this.activatedRoute.snapshot.params['id'];

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
      this.router.navigate(['course', 1]);
    } else {
      console.log('Incorrect');
    }
  }
}
