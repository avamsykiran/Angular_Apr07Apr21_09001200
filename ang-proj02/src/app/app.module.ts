import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpsComponent } from './emps/emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { DeptnamePipe } from './pipes/deptname.pipe';
import { EmpFormComponent } from './emp-form/emp-form.component';

const pathMappings : Routes = [
  {path:'depts',component:DeptsComponent},
  {path:'emps',component:EmpsComponent,children:[
    {path:'list',component:EmpsListComponent},
    {path:'new',component:EmpFormComponent},
    {path:'',pathMatch:'full',redirectTo:'list'}
  ]},
  {path:'',pathMatch:'full',redirectTo:'depts'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeptsComponent,
    DeptFormComponent,
    DeptListComponent,
    EmpsComponent,
    EmpsListComponent,
    DeptnamePipe,
    EmpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(pathMappings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
