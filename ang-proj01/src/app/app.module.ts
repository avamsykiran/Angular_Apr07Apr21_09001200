import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArthComponent } from './arth/arth.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InwordsPipe } from './inwords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ArthComponent,
    PipesDemoComponent,
    InwordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
