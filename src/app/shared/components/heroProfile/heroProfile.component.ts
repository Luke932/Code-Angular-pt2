import { Component, Input } from '@angular/core';
import { AdsComponent } from '../models/ads.components';

@Component({
  selector: 'app-ads',
  templateUrl: './heroProfile.component.html',
  styleUrls: ['./heroProfile.component.scss']
})
export class HeroProfileComponent implements AdsComponent{
@Input()
public data:any;
}
