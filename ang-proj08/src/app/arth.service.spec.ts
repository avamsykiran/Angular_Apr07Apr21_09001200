import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ArthService]
    });
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#add',()=>{
    it('should return 0 for 0 and 0 as input',()=>{
      expect(service.add(0,0)).toEqual(0);
    });

    it('should return 2 for 0 and 2 as input',()=>{
      expect(service.add(0,2)).toEqual(2);
    });

    it('should return 0 for 0 and -2 as input',()=>{
      expect(service.add(0,-2)).toEqual(-2);
    });

    it('should return -4 for -2 and -2 as input',()=>{
      expect(service.add(-2,-2)).toEqual(-4);
    });
  });
});