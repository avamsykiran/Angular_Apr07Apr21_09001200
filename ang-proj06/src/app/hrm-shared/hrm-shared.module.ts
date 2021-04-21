import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptnamePipe } from './deptname.pipe';
import { HrmServicesModule } from '../hrm-services/hrm-services.module';

@NgModule({
  declarations: [HeaderComponent, MsgBoxComponent, DashboardComponent, DeptnamePipe],
  imports: [
    CommonModule,
    RouterModule,
    HrmServicesModule
  ],
  exports:[
    HeaderComponent,
    MsgBoxComponent,
    DashboardComponent,
    DeptnamePipe
  ]
})
export class HrmSharedModule { }
