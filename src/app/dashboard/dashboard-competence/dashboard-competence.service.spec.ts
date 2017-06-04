/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardCompetenceService } from './dashboard-competence.service';

describe('CompetenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardCompetenceService]
    });
  });

  it('should ...', inject([DashboardCompetenceService], (service: DashboardCompetenceService) => {
    expect(service).toBeTruthy();
  }));
});
