import { Component } from '@angular/core';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent {
  emps: Emp[];

  constructor(private empService: EmpService) {
    this.loadData();
  }

  loadData() {
    this.emps = this.empService.getAll();
  }

  delete(id: number) {
    this.empService.deleteById(id);
    this.loadData();
  }
}
