import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptListComponent } from './dept-list/dept-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeptsComponent,
    DeptFormComponent,
    DeptListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
