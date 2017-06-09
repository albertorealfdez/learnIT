import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Activity } from '../../shared/activity.model';

@Injectable()
export class ActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: Http) { }

  public getAllActivities(): Promise<Activity[]> {
    const url = `${this.activityUrl}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Activity[];
      })
      .catch(this.handleError);
  }

  public getActivity(id: number): Promise<Activity> {
    const url = `${this.activityUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Activity;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
