import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageItem } from '../configs/local-storage-item';
import { AppRoutings } from '../configs/app-routings';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {

constructor(private localSrv: LocalStorageService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthorization();
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthorization();
  }
  
  private checkAuthorization(): boolean | UrlTree {
    const user = this.localSrv.getItem(LocalStorageItem.user);
    console.log('Utente durante il controllo di autorizzazione:', user);
    
    return !!user && !!user.token
      ? true
      : this.router.createUrlTree([AppRoutings.loginPage]);
  }
  

  


}
