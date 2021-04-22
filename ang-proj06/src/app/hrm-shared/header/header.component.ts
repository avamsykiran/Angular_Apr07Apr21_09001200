import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/hrm-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  role:string;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
