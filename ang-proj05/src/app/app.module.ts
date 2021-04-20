import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrmSharedModule } from './hrm-shared/hrm-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HrmSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
