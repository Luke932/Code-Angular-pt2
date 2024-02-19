import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroStore } from './hero.store';
import { AppConfig } from 'src/app/core/configs/app-config';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AbilityService {

  constructor(private http: HttpClient, private heroStore: HeroStore, private appConfig: AppConfig) { }

  getAbilitiesById(id:number) {
    return this.http.get(`${this.appConfig.baseUrl}${this.appConfig.endpoints.abilities.baseUrl}\\${id}`)
  }

  joinHeroAbilities(id:number){
    return this.http.get(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroesAbilities.baseUrl}?heroId=${id}`)
    .pipe(tap(res => console.log(res)))
  }

  saveAbility(item: any): Observable<any> {
    return this.http.post(`${this.appConfig.baseUrl}${this.appConfig.endpoints.abilities.baseUrl}`,item);
  }

}
