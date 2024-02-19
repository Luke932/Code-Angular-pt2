import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../configs/app-config';
import { Observable } from 'rxjs';

export class User{
  public id!: number;
  public nome!: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { }

  getProfile(id:number):Observable<User>{
    return this.http.get<User>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.profiles.baseUrl}/${id}`)
  }

  getProfiles():Observable<User>{
    return this.http.get<User>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.profiles.baseUrl}`)
  }
}
