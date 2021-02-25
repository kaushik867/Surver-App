import { TestBed } from '@angular/core/testing';

import { SubmissionGuard } from './submission.guard';

describe('SubmissionGuard', () => {
  let guard: SubmissionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubmissionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
