import { Injectable } from '@angular/core';
import { Dept } from '../model/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  depts: Dept[];

  constructor() {
    this.depts = [
      { id: 1, title: 'JavaDevelopment' },
      { id: 2, title: 'DevOpsTeam' },
      { id: 3, title: 'ITSupport' }
    ];
  }

  getAll():Dept[]{
    return this.depts;
  }

  getById(id:number):Dept{
    return this.depts.find(d => d.id===id);
  }

  add(dept:Dept):Dept{
    this.depts.push(dept);
    return dept;
  }

  deleteById(id:number):void{
    let index = this.depts.findIndex(d=>d.id===id);
    this.depts.splice(index,1);
  }

  update(dept:Dept):Dept{
    let index = this.depts.findIndex(d=>d.id===dept.id);
    this.depts[index]=dept;
    return dept;
  }
}
