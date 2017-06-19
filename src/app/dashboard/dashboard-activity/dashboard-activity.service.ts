import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Activity } from '../../shared/activity/activity.model';

@Injectable()
export class DashboardActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: Http) { }

  public createActivity(activity: Activity): Observable<Activity> {
    const url = `${this.activityUrl}`;

    return this.http.post(url, activity)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public updateActivity(activity: Activity): Observable<Activity> {
    const url = `${this.activityUrl}/${activity.id}`;

    return this.http.put(url, activity)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
