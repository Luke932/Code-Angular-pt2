import { Component, Input } from '@angular/core';
import { AdsComponent } from '../models/ads.components';

@Component({
  selector: 'app-ad-hero-job-component',
  templateUrl: './ad-hero-job-component.component.html',
  styleUrls: ['./ad-hero-job-component.component.scss']
})
export class AdHeroJobComponentComponent implements AdsComponent {
  @Input()
  public data:any;
}
