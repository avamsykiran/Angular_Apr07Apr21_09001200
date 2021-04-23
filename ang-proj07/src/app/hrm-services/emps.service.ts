import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emp } from '../model/emp';

@Injectable()
export class EmpsService {

  apiUrl:string;

  constructor(private httpClient : HttpClient) {
    this.apiUrl = environment.empApi;
  }

  getAll():Observable<Emp[]>{
    return this.httpClient.get<Emp[]>(this.apiUrl);
  }

  getById(id:number):Observable<Emp>{
    return this.httpClient.get<Emp>(`${this.apiUrl}/${id}`);
  }

  add(emp:Emp):Observable<Emp>{
    return this.httpClient.post<Emp>(this.apiUrl,emp);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(emp:Emp):Observable<Emp>{
    return this.httpClient.put<Emp>(`${this.apiUrl}/${emp.id}`,emp);
  }
}
