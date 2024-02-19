import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageItem } from '../configs/local-storage-item';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localSrv: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.localSrv.getItem(LocalStorageItem.user);
    if(!!user && !!user.token){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${user.token}`
        }
      })
      console.log('Interceptor is in use:', request);
    }
    return next.handle(request);
  }
}
