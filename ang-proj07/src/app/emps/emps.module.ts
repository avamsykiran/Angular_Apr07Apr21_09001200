import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpsRoutingModule } from './emps-routing.module';
import { EmpsComponent } from './emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { HrmServicesModule } from '../hrm-services/hrm-services.module';
import { HrmSharedModule } from '../hrm-shared/hrm-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmpsComponent, EmpsListComponent, EmpFormComponent],
  imports: [
    CommonModule,
    EmpsRoutingModule,
    HrmServicesModule,
    HrmSharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpsModule { }
