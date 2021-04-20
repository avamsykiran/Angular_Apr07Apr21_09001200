import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [HeaderComponent, MsgBoxComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MsgBoxComponent,
    DashboardComponent
  ]
})
export class HrmSharedModule { }
