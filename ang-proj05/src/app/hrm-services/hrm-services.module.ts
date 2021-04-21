import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { DeptsService } from './depts.service';
import { EmpsService } from './emps.service';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    DeptsService,EmpsService, 
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandlingInterceptor,multi:true}
  ]
})
export class HrmServicesModule { }
