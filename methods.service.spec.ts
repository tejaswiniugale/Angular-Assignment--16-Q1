import { TestBed } from '@angular/core/testing';

import { MethodsService } from './methods.service';


describe('MethodsService', () => {
  let service: MethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('#countCapital should return the number of capital letters' ,() => {
    expect(service.countCapital('Angular')).toEqual(1);
    expect(service.countCapital('Angular Application')).toEqual(2);
    expect(service.countCapital('ANgular APPLIcation')).toEqual(5);
  
  });

  it('#checkPassword should validate password complexity' ,() => {
    expect(service.checkPassword('NgApp2$')).toBeFalse();
    expect(service.checkPassword('Angular12$')).toBeFalse();
    expect(service.countCapital('AnGularApP123!')).toBeTrue();
    expect(service.countCapital('aaAA11!!')).toBeTrue();
  
  });
  
});
