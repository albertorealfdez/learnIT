import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Activity } from './activity.model';

@Injectable()
export class ActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: HttpClient) { }

  public getAllActivities(): Observable<Activity[]> {
    const url = `${this.activityUrl}`;

    return this.http.get(url)
      .map(response => {
        return response as Activity[];
      })
      .catch(this.handleError);
  }

  public getActivitiesByCourse(courseId: string): Observable<Activity[]> {
    const url = `${this.activityUrl}?course=${courseId}`;

    return this.http.get(url)
      .map(response => {
        return response as Activity[];
      })
      .catch(this.handleError);
  }

  public getActivity(id: string): Observable<Activity> {
    const url = `${this.activityUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response as Activity;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
