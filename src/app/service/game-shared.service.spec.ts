import { TestBed } from '@angular/core/testing';

import { GameSharedService } from './game-shared.service';

describe('GameSharedService', () => {
  let service: GameSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
