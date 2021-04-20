import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { DeptsService } from './depts.service';
import { EmpsService } from './emps.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    DeptsService,EmpsService
  ]
})
export class HrmServicesModule { }
