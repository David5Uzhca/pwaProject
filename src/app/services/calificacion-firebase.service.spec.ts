import { TestBed } from '@angular/core/testing';
import { CalificacionesFirebaseService } from './calificacion-firebase.service';

describe('CalificacionesFirebaseService', () => {
  let service: CalificacionesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionesFirebaseService);
  });

  it('should be created', () => {expect(service).toBeTruthy();});
});