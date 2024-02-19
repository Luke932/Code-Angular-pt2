import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroDto } from '../models/hero-dto.model';
import { HeroStore } from './hero.store';
import { AppConfig } from 'src/app/core/configs/app-config';

@Injectable()
export class HeroService {
  
  constructor(private http: HttpClient, private heroStore: HeroStore, private appConfig: AppConfig) { }

  getHeroes(){
    this.http.get<HeroDto[]>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}`).subscribe
    (res => this.heroStore.init(res));
  }

  delete(id:number){
    this.http.delete(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}/${id}`).subscribe
    (() =>{
      this.heroStore.delete(id);
    })
  }

  add(hero: HeroDto) {
    this.http.post(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}`, hero).subscribe();
  }

}
