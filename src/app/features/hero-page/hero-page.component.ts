import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/core/services/add.service';
import { AdItem } from 'src/app/shared/models/ad-item.model';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
public ads: AdItem[] = [];

constructor(private adService: AddService){}

ngOnInit(): void {
  this.ads = this.adService.getAds();
}

}
