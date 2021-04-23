import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 welcomeText:string;
 constructor(){
  this.welcomeText="Hello! Welcome!";
 }
 btnClick(){
   this.welcomeText="Hmm! So you clicked it";
 }
}
