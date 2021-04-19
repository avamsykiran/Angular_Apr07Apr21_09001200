import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dept } from '../model/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  apiUrl:string;

  constructor(private httpClient : HttpClient) {
    this.apiUrl = "http://localhost:8990/depts";
  }

  getAll():Observable<Dept[]>{
    return this.httpClient.get<Dept[]>(this.apiUrl);
  }

  getById(id:number):Observable<Dept>{
    return this.httpClient.get<Dept>(`${this.apiUrl}/${id}`);
  }

  add(dept:Dept):Observable<Dept>{
    return this.httpClient.post<Dept>(this.apiUrl,dept);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(dept:Dept):Observable<Dept>{
    return this.httpClient.put<Dept>(`${this.apiUrl}/${dept.id}`,dept);
  }

}
