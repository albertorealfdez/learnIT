/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardActivityService } from './dashboard-activity.service';

describe('ActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardActivityService]
    });
  });

  it('should ...', inject([DashboardActivityService], (service: DashboardActivityService) => {
    expect(service).toBeTruthy();
  }));
});
