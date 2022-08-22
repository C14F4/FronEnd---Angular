import { TestBed } from '@angular/core/testing';

import { EducacionService } from './educacion.service';

describe('EducacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducacionService = TestBed.get(EducacionService);
    expect(service).toBeTruthy();
  });
});
