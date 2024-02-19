import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './enviroments/enviroment';
import { enableProdMode } from '@angular/core';
import { AppConfig } from './app/core/configs/app-config';


fetch(`/assets/configs/config.json?v=${environment.appVersion}`)
.then((response) => response.json())
.then((config) => {
  if(environment.production){
    enableProdMode();
  }
  platformBrowserDynamic([{provide:AppConfig, useValue: config}]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
});


