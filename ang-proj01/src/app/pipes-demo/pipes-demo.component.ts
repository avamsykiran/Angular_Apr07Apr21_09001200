import { Component } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  strData:string;
  numData:number;
  dateData:Date;
  objData:Contact;

  constructor() {
    this.dateData=new Date();
    this.numData=Math.PI;
    this.strData="Hello world! we welcoem YOU ALL";
    this.objData={fullName:'Vamsy',gender:'male',mobile:'9948016004'};
   }


}
