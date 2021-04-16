import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dept } from '../model/dept';
import { DeptService } from '../service/dept.service';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {

  depts: Dept[];

  empForm: FormGroup;

  id: FormControl;
  name: FormControl;
  hiredate: FormControl;
  deptId: FormControl;
  basic: FormControl;

  isEditing: boolean;

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

    this.depts = this.deptService.getAll();

    let eid = parseInt(this.activatedRoute.snapshot.params.id);

    if (eid) {
      this.isEditing = true;
      let emp = this.empService.getById(eid);
      if (emp) {
        this.empForm.setValue({
          id: emp.id,
          name: emp.name,
          hiredate: emp.hiredate.toISOString().substr(0, 10),
          deptId: emp.deptId,
          basic: emp.basic
        });
      }
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

    if (this.isEditing)
      this.empService.update(emp);
    else
      this.empService.add(emp);
      
    this.router.navigateByUrl("/emps/list");
  }

}
