import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HrmUser } from '../model/hrm-user';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthService {

  userApi: string;

  constructor(private httpClient:HttpClient) {
    this.userApi=environment.userApi;
  }

  private putUserInSession(user:HrmUser):void{
    sessionStorage.setItem("user",JSON.stringify({...user,password:null}));
  }

  logIn(email:string,password:string) : Observable<boolean> {
    return this.httpClient.get<HrmUser[]>(`${this.userApi}?email=${email}`).pipe(
      map( users => {
        let result = false;
        if(users && users.length>0){
          let user = users[0];
          if(user.password===password){
            this.putUserInSession(user);
            result=true;
          }
        }
        return result;
      })
    );
  }

  logout(){
    sessionStorage.clear(); //remvoe every data in the session including user.
  }

  isLoggedIn():boolean{
    return sessionStorage.getItem("user")!=null;
  }

  getCurrentUserEmail():string{
    if(!this.isLoggedIn()){
      throw "No Loggind User!";
    }

    return JSON.parse(sessionStorage.getItem("user")).email;
  }

  getCurrentUserRole():string{
    if(!this.isLoggedIn()){
      throw "No Loggind User!";
    }

    return JSON.parse(sessionStorage.getItem("user")).role;
  }
}
