import { TestBed } from '@angular/core/testing';

import { ReservasComponent } from './reservas-component';

describe('ReservasComponent', () => {
  let service: ReservasComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
