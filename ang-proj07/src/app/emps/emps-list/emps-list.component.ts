import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/hrm-services/auth.service';
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
  currentUserRole:string;

  constructor(private empService: EmpsService,private authService:AuthService) {
  }

  ngOnInit() {
    this.loadData();
    this.currentUserRole=this.authService.getCurrentUserRole();
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
