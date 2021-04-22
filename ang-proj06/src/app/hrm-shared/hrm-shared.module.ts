import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptnamePipe } from './deptname.pipe';
import { HrmServicesModule } from '../hrm-services/hrm-services.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent, 
    MsgBoxComponent, 
    DashboardComponent, 
    DeptnamePipe,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HrmServicesModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    MsgBoxComponent,
    DashboardComponent,
    DeptnamePipe
  ]
})
export class HrmSharedModule { }
