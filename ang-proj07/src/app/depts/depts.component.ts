import { Component, OnInit } from '@angular/core';
import { AuthService } from '../hrm-services/auth.service';
import { DeptsService } from '../hrm-services/depts.service';
import { Dept } from '../model/dept';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts:Dept[];
  err:string;
  
  currentUserRole: string;

  constructor(private deptService:DeptsService,private authService: AuthService) { 
   
  }

  ngOnInit(){
    this.loadData();
    this.currentUserRole = this.authService.getCurrentUserRole();
  }

  loadData(){
    this.deptService.getAll().subscribe(
      (data) => this.depts=data,
      (err) => this.err=err
    );
  }

  doAdd(dept:Dept){
    this.deptService.add(dept).subscribe(
      (data) => this.loadData(),
      (err) => this.err=err
    );
  }
}
