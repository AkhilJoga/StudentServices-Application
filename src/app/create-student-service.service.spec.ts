import { TestBed } from '@angular/core/testing';
import { CreateStudentServiceService } from './create-student-service.service';
import { HttpClient } from '@angular/common/http';

describe('CreateStudentServiceService', () => {
  let service: CreateStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
