import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dept } from '../model/dept';

@Injectable()
export class DeptsService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.deptApi;
  }

  getAll(): Observable<Dept[]> {
    return this.httpClient.get<Dept[]>(this.apiUrl);
  }

  getById(id: number): Observable<Dept> {
    return this.httpClient.get<Dept>(`${this.apiUrl}/${id}`);
  }

  add(dept: Dept): Observable<Dept> {
    return this.httpClient.post<Dept>(this.apiUrl, dept);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(dept: Dept): Observable<Dept> {
    return this.httpClient.put<Dept>(`${this.apiUrl}/${dept.id}`, dept);
  }
}
