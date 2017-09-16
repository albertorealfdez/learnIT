import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Activity } from '../../shared/activity/activity.model';

@Injectable()
export class CourseActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: Http) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
