import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsersService } from './users.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {

  constructor(private us: UsersService) { }

  intercept(req: any, next: any){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.us.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }

}
