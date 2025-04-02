import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardUsersGuard } from './guard-users.guard';

describe('guardUsersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardUsersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
