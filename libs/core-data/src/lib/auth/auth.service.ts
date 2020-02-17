import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './credentials';
import { Observable, of } from 'rxjs';

const UrlForSignIn = 'https://mdv-auth-json-server.herokuapp.com/auth/login';
const UrlForSignUp = 'https://mdv-auth-json-server.herokuapp.com/users';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate({email, password}: Credentials): Observable<any> {
    return this.http.post(UrlForSignIn, {email, password});
  }

  logout(): Observable<any> {
    localStorage.removeItem('TOKEN');
    return of('ok');
  }
}
