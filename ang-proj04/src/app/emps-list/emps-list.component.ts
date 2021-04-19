import { Component, OnInit } from '@angular/core';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit{
  emps: Emp[];
  err:string;

  constructor(private empService: EmpService) {
  }

  ngOnInit(){
    this.loadData();
  }

  loadData() {
   this.empService.getAll().subscribe(
     (data) => this.emps=data,
     (err) => {
       console.log(err);
       this.err="Could not retrive data!";
     }
   );
  }

  delete(id: number) {
    this.empService.deleteById(id).subscribe(
      () => this.loadData(),
      (err) => {
        console.log(err);
        this.err="Could not delete record!";
      }
    );
  }
}
