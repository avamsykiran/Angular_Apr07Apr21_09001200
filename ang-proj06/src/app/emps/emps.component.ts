import { Component, OnInit } from '@angular/core';
import { AuthService } from '../hrm-services/auth.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {

  currentUserRole: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.currentUserRole = this.authService.getCurrentUserRole();
  }


}
