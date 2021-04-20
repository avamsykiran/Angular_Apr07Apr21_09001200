import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpsRoutingModule } from './emps-routing.module';
import { EmpsComponent } from './emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';


@NgModule({
  declarations: [EmpsComponent, EmpsListComponent, EmpFormComponent],
  imports: [
    CommonModule,
    EmpsRoutingModule
  ]
})
export class EmpsModule { }
