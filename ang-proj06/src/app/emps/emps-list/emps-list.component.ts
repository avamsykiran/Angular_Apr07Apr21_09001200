import { Component, OnInit } from '@angular/core';
import { EmpsService } from 'src/app/hrm-services/emps.service';
import { Emp } from 'src/app/model/emp';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit {

  emps: Emp[];
  err: string;

  constructor(private empService: EmpsService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.empService.getAll().subscribe(
      (data) => this.emps = data,
      (err) => this.err=err
    );
  }

  delete(id: number) {
    this.empService.deleteById(id).subscribe(
      () => this.loadData(),
      (err) => this.err = err
    );
  }

}
