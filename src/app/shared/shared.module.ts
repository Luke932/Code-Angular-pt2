import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {materialModule } from './material.module';
import { AdHeroJobComponentComponent, HeroProfileComponent, AddBannerComponent, AlertComponent } from './index';
import { AdDirective } from './directives/ad-host.directive';
import { BaseComponent } from './components/base/base.component';


@NgModule({
  declarations: [
    AlertComponent,
    AddBannerComponent,
    HeroProfileComponent,
    AdHeroJobComponentComponent,
    AdDirective,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports:[
    AlertComponent,
    ...materialModule,
    AddBannerComponent,
    HeroProfileComponent,
    AdHeroJobComponentComponent,
    AdDirective
  ]
})
export class SharedModule { }
