import { Component } from '@angular/core';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent  {
  emps:Emp[];

  constructor(private empService:EmpService) {
    this.emps=this.empService.getAll();
  }
}
