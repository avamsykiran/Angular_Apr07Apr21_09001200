import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HrmServicesModule } from '../hrm-services/hrm-services.module';
import { HrmSharedModule } from '../hrm-shared/hrm-shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HrmServicesModule,
    HrmSharedModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
