import { Component } from '@angular/core';
import { Dept } from '../model/dept';
import { DeptService } from '../service/dept.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent  {

  depts:Dept[];

  constructor(private deptService:DeptService) { 
    this.depts=this.deptService.getAll();
  }

  doAdd(dept:Dept){
    this.deptService.add(dept);
    this.depts=this.deptService.getAll();
  }
}
