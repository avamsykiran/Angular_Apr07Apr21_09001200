import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  welcomeText:string;

  constructor() { 
    this.welcomeText="Hello Welcoem All! This is my first angular project";
  }


}
