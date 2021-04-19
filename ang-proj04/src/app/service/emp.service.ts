import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from '../model/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  apiUrl:string;

  constructor(private httpClient : HttpClient) {
    this.apiUrl = "http://localhost:8990/emps";
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
