import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  welcomeText:string;
  imgs:string[];
  imgIndex:number;
  imageStyle:any;

  constructor() { 
    this.welcomeText="Hello Welcoem All! This is my first angular project";
    this.imgs=["assets/imgs/w1.png","assets/imgs/w2.jpg"];
    this.imgIndex=0;
    this.imageStyle={centered:false,bordered:true,roundCornered:true};
  }

  toggleImageIndex(){
    this.imgIndex = this.imgIndex==0?1:0;
  }
}
