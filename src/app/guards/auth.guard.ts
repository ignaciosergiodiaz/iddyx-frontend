import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private us: UsersService, private router: Router){}

  canActivate(): boolean {

    if(this.us.loggedIn()){
      return true
    }
    this.router.navigate(['/signin'])
    return false
  }
}
