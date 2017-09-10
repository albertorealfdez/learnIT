/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseActivityService } from './activity.service';

describe('CourseActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseActivityService]
    });
  });

  it('should ...', inject([CourseActivityService], (service: CourseActivityService) => {
    expect(service).toBeTruthy();
  }));
});
