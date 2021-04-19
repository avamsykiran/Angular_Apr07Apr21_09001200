import { Component, OnInit } from '@angular/core';
import { Dept } from '../model/dept';
import { DeptService } from '../service/dept.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts:Dept[];
  err:string;

  constructor(private deptService:DeptService) { 
   
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.deptService.getAll().subscribe(
      (data) => { this.depts=data;},
      (err) => {
        console.log(err);
        this.err="Could not retrive data!";
      }
    );
  }

  doAdd(dept:Dept){
    this.deptService.add(dept).subscribe(
      (data) => { this.loadData();},
      (err) => {
        console.log(err);
        this.err="Could not save this record!";
      }
    );
  }
}
