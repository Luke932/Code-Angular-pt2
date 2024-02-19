import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutings } from '../configs/app-routings';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(catchError((err:any)=>{
      if (err.status === 401){
        this.router.navigate([AppRoutings.loginPage]);
        return throwError(null);
      }
      return throwError(err);
    }));
  }
}
