import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeptsService } from 'src/app/hrm-services/depts.service';
import { EmpsService } from 'src/app/hrm-services/emps.service';
import { Dept } from 'src/app/model/dept';
import { Emp } from 'src/app/model/emp';

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

  constructor(private empService: EmpsService, private router: Router,
    private deptService: DeptsService, private activatedRoute: ActivatedRoute) {

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
      (err) => this.err=err
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
        (err) => this.err=err
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
      (emp) => this.router.navigateByUrl("/emps/list"),
      (err) => this.err=err
    );

  }
}
