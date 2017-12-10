/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectionEngineService } from './selection-engine.service';

describe('SelectionEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectionEngineService]
    });
  });

  it('should ...', inject([SelectionEngineService], (service: SelectionEngineService) => {
    expect(service).toBeTruthy();
  }));
});
