import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class UserService {

  MAIN_LINK: string = 'https://fcihosi.herokuapp.com/api/auth';
  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post<{ token: string }>(this.MAIN_LINK, user);
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    // const decodedToken = helper.decodeToken(token);
    // const expirationDate = helper.getTokenExpirationDate(token);

    const isExpired = helper.isTokenExpired(token);

    if (!token)
      return false;

    if (isExpired)
      return false

    return true
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser(){
     localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
