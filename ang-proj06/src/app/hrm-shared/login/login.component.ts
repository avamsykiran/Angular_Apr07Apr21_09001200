import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/hrm-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  err: string;

  @Output()
  loginSuccess: EventEmitter<void>;

  constructor(private authService: AuthService) {
    this.loginSuccess = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    this.authService.logIn(this.email,this.password).subscribe(
      (isAuthenticated) => {
        if(isAuthenticated){
          this.loginSuccess.emit();
        }else{
          this.err="Invalid Credits! Please try again!"
        }
      },
      err => this.err=err
    );
  }
}
