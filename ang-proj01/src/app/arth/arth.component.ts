import { Component } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent  {

  contacts:Contact[];

  constructor() { 
    this.contacts=[
      {fullName:'Vamsy Kiran',mobile:'9052224753',gender:'male'},
      {fullName:'Suseela',mobile:'9054444753',gender:'female'},
      {fullName:'Indhikla',mobile:'2352224753',gender:'female'},
      {fullName:'Sagar',mobile:'89952224753',gender:'male'},
      {fullName:'Gowri Saradha',mobile:'9082224753',gender:'female'}
    ];
  }

  delete(c:Contact){
    let index = this.contacts.findIndex(ct => ct.mobile==c.mobile);
    this.contacts.splice(index,1);
  }
}
