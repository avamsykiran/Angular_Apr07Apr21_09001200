import { Component, Input } from '@angular/core';
import { Dept } from '../model/dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent {

  @Input()
  depts:Dept[];

  constructor() { }


}
