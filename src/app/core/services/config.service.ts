import { Injectable } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';

@Injectable()
export class ConfigService {
public theme: ThemeEnum = ThemeEnum.Light;

public setTheme(valore:ThemeEnum){
this.theme = valore
}
}
