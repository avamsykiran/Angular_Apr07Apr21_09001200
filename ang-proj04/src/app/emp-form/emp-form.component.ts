import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'node:console';
import { Observable } from 'rxjs';
import { Dept } from '../model/dept';
import { Emp } from '../model/emp';
import { DeptService } from '../service/dept.service';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  depts: Dept[];

  empForm: FormGroup;

  id: FormControl;
  name: FormControl;
  hiredate: FormControl;
  deptId: FormControl;
  basic: FormControl;

  isEditing: boolean;

  err: string;

  constructor(private empService: EmpService, private router: Router,
    private deptService: DeptService, private activatedRoute: ActivatedRoute) {

    this.id = new FormControl('', [Validators.required, Validators.min(1)]);
    this.name = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
    this.hiredate = new FormControl('', [Validators.required]);
    this.deptId = new FormControl('', [Validators.required, Validators.min(1)]);
    this.basic = new FormControl('', [Validators.required, Validators.min(1)]);

    this.empForm = new FormGroup({
      id: this.id,
      name: this.name,
      hiredate: this.hiredate,
      deptId: this.deptId,
      basic: this.basic
    });
  }

  ngOnInit() {
    this.deptService.getAll().subscribe(
      (data) => this.depts = data,
      (err) => {
        console.log(err);
        this.err = "Could not fetch the departments list!";
      }
    );

    let eid = parseInt(this.activatedRoute.snapshot.params.id);

    if (eid) {
      this.isEditing = true;
      this.empService.getById(eid).subscribe(
        (emp:Emp) => {
          this.empForm.setValue({
            id: emp.id,
            name: emp.name,
            hiredate: new Date(emp.hiredate).toISOString().substr(0,10),
            deptId: emp.deptId,
            basic: emp.basic
          });
        },
        (err) => {
          console.log(err);
          this.err = "Could not fetch the employee details!";
        }
      );
    } else {
      this.isEditing = false;
    }
  }

  handleSubmit() {
    let e = this.empForm.value;
    let emp = {
      id: parseInt(e.id),
      name: e.name,
      hiredate: new Date(e.hiredate),
      deptId: parseInt(e.deptId),
      basic: parseFloat(e.basic)
    };

    let ob: Observable<Emp> = null;

    if (this.isEditing) {
      ob = this.empService.update(emp);
    } else {
      ob = this.empService.add(emp);
    }
    
    ob.subscribe(
      (emp) => {
        this.router.navigateByUrl("/emps/list");
      },
      (err) => {
        console.log(err);
        this.err = "Could not save the record!";
      }
    );

  }

}
