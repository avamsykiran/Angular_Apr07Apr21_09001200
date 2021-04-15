import { Injectable } from '@angular/core';
import { Emp } from '../model/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  emps:Emp[];

  constructor() { 
    this.emps = [
      {id:101,name:'Vamsy',hiredate:new Date(),basic:25000,deptId:1},
      {id:102,name:'Srinu',hiredate:new Date(),basic:25000,deptId:2},
      {id:103,name:'Suseela',hiredate:new Date(),basic:25000,deptId:1}
    ];
  }

  getAll():Emp[]{
    return this.emps;
  }

  getById(id:number):Emp{
    return this.emps.find(e => e.id===id);
  }

  add(emp:Emp):Emp {
    this.emps.push(emp);
    return emp;
  }

  update(emp:Emp):Emp{
    let index = this.emps.findIndex(e=>e.id===emp.id);
    this.emps[index]=emp;
    return emp;
  }

  deleteById(id:number){
    let index = this.emps.findIndex(e=>e.id===id);
    this.emps.splice(index,1);
  }
}
