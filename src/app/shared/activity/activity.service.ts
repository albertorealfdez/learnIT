import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Activity } from './activity.model';

@Injectable()
export class ActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: Http) { }

  public getAllActivities(): Observable<Activity[]> {
    const url = `${this.activityUrl}`;

    return this.http.get(url)
      .map(response => {
        return response.json().data as Activity[];
      })
      .catch(this.handleError);
  }

  public getActivity(id: number): Observable<Activity> {
    const url = `${this.activityUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response.json().data as Activity;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
