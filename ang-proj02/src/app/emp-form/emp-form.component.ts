import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dept } from '../model/dept';
import { DeptService } from '../service/dept.service';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {

  depts:Dept[];

  empForm : FormGroup;

  id:FormControl;
  name:FormControl;
  hiredate:FormControl;
  deptId:FormControl;
  basic:FormControl;

  constructor(private empService:EmpService,private router:Router,private deptService:DeptService) { 
    this.id = new FormControl('',[Validators.required,Validators.min(1)]);
    this.name = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]);
    this.hiredate = new FormControl('',[Validators.required]);
    this.deptId = new FormControl('',[Validators.required,Validators.min(1)]);
    this.basic = new FormControl('',[Validators.required,Validators.min(1)]);

    this.empForm = new FormGroup({
      id:this.id,
      name:this.name,
      hiredate:this.hiredate,
      deptId:this.deptId,
      basic:this.basic
    });

    this.depts = this.deptService.getAll();
  }

  handleSubmit(){
    this.empService.add(this.empForm.value);
    this.router.navigateByUrl("/emps/list");
  }

}
