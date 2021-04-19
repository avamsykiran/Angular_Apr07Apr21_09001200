import { Component, EventEmitter, Output } from '@angular/core';
import { Dept } from '../model/dept';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent {

  dept: Dept;

  @Output()
  add: EventEmitter<Dept>;

  constructor() {
    this.dept = { id: 0, title: '' };
    this.add = new EventEmitter<Dept>();
  }

  saveDept(){
    this.add.emit(this.dept);
    this.dept = { id: 0, title: '' };
  }

}
