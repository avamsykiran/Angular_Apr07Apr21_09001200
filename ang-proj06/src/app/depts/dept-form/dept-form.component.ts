import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dept } from 'src/app/model/dept';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  dept: Dept;

  @Output()
  add: EventEmitter<Dept>;

  constructor() {
    this.dept = { id: 0, title: '' };
    this.add = new EventEmitter<Dept>();
  }

  saveDept() {
    this.add.emit(this.dept);
    this.dept = { id: 0, title: '' };
  }
  ngOnInit(): void {
  }

}
