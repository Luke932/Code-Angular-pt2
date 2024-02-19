import { Component } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  constructor(public languageSrv:LanguageService){}
}
