import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoles } from '../configs/app-roles';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageItem } from '../configs/local-storage-item';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanLoad {

  constructor(private localSrv: LocalStorageService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkPermission(route.data?.['role']);
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkPermission(route.data?.['role']);
  }
  
  
  checkPermission(role: AppRoles): boolean {
    const user = this.localSrv.getItem(LocalStorageItem.user);
    console.log('Utente durante il controllo di permessi:', user);
    console.log('Ruolo richiesto:', role);
    
    if (!!user && !!role && user.role !== role) {
      console.log('Accesso negato: Ruolo utente non corrisponde al ruolo richiesto.');
      return false;
    }
  
    console.log('Accesso consentito.');
    return true;
  }
  
  
  


}
