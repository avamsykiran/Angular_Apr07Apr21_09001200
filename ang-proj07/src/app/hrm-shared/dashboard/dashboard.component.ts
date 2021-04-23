import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/hrm-services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,DoCheck {

  currentUserEmail: string;
  currentUserRole: string;

  constructor(private authService: AuthService) {
    this.currentUserEmail = null;
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.currentUserEmail = this.authService.getCurrentUserEmail();
      this.currentUserRole = this.authService.getCurrentUserRole();
    }
  }

  ngDoCheck():void{
    if (this.authService.isLoggedIn()) {
      this.currentUserEmail = this.authService.getCurrentUserEmail();
      this.currentUserRole = this.authService.getCurrentUserRole();
    }
  }

  handleLogin() {
    this.currentUserEmail = this.authService.getCurrentUserEmail();
    this.currentUserRole = this.authService.getCurrentUserRole();
  }
}
