import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  // URL = 'https://api.iddux.com/api' ;

  URL = 'http://iddux.cl:3000/api' ;

  constructor(private http: HttpClient, private router: Router ) { }

  signUp( user: any ){
    return this.http.post<any>(this.URL + '/user/signup', user)
  }

  signIn( user: any ){
    return this.http.post<any>(this.URL + '/user/signin', user)
  }

  loggedIn(){
    return localStorage.getItem("token")

  }

  getToken(){
    return localStorage.getItem("token")
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("id_user")
    localStorage.removeItem("username")
    localStorage.removeItem("email")
  }

}
