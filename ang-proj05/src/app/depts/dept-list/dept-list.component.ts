import { Component, Input, OnInit } from '@angular/core';
import { Dept } from 'src/app/model/dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  @Input()
  depts:Dept[];

  constructor() { }

  ngOnInit():void{}
}
