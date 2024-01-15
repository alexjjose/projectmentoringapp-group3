import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/project';

  constructor(private http: HttpClient) {}

  reg(data: any): Observable<any> {
    return this.http.post('http://localhost:3500/studentreg', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  loginStudent(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:3600/studentlogin', loginData);
  }

  regi(data: any): Observable<any> {
    return this.http.post('http://localhost:3900/mentorreg', data);
  }

  loginMentor(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:3800/mentorlogin', loginData);
  }
}