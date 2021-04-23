import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from './depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { HrmServicesModule } from '../hrm-services/hrm-services.module';
import { HrmSharedModule } from '../hrm-shared/hrm-shared.module';


@NgModule({
  declarations: [DeptsComponent, DeptFormComponent, DeptListComponent],
  imports: [
    CommonModule,
    DeptsRoutingModule,
    HrmServicesModule,
    HrmSharedModule,
    FormsModule
  ]
})
export class DeptsModule { }
