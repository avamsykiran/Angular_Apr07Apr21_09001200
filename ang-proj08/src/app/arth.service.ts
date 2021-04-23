import { Injectable } from '@angular/core';

@Injectable()
export class ArthService {

  constructor() { }

  add(x:number,y:number):number{
    return x+y;
  }
}
