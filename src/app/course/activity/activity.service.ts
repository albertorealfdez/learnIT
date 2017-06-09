import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Activity } from '../../shared/activity.model';

@Injectable()
export class CourseActivityService {
  private activityUrl = 'api/activities';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
