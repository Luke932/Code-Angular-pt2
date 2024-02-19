import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';
import { LanguageService } from '../../services/language.service';
import { AppLanguages } from '../../configs/app-language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public themeEnum = ThemeEnum;
public appLanguages = AppLanguages;

  constructor(public configService: ConfigService, public languageSrv:LanguageService){}

  ngOnInit(): void {
   this.languageSrv.getLanguage()
   .subscribe(res => console.log(res)
   )}

   public changeLanguage(item:any) {
      this.languageSrv.setLanguage(item.value);
    }

}
