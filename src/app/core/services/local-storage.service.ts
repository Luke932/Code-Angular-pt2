import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setItem(value:any, type:string){
    localStorage.setItem(type,JSON.stringify(value));
  }

  public getItem(type:string){
    const item = localStorage.getItem(type);
    return !!item ? JSON.parse(item) : null;
  }

  public removeItem(type:string){
    localStorage.removeItem(type);
  }
  constructor() { }
}
