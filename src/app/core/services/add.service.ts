import { Injectable } from '@angular/core';
import { AdHeroJobComponentComponent } from 'src/app/shared/components/ad-hero-job-component/ad-hero-job-component.component';
import { HeroProfileComponent } from 'src/app/shared/components/heroProfile/heroProfile.component';
import { AdItem } from 'src/app/shared/models/ad-item.model';

@Injectable()
export class AddService {

 getAds(){
  return[
    new AdItem(HeroProfileComponent,{name: 'nome di prova', bio: 'bio di prova'}),
    new AdItem(AdHeroJobComponentComponent,{title: 'titolo di prova', bio: 'bio di prova'}),
    new AdItem(HeroProfileComponent,{name: 'nome di prova 2', bio: 'bio di prova 2'}),
    new AdItem(AdHeroJobComponentComponent,{title: 'titolo di prova 2', bio: 'bio di prova 2'}),
  ]
 }
}
