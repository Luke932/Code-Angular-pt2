import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective } from '../../directives/ad-host.directive';
import { AdItem } from '../../models/ad-item.model';
import { AdsComponent } from '../models/ads.components';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss'],
})
export class AddBannerComponent implements OnInit, OnDestroy {
  @ViewChild(AdDirective, { static: true })
  public adHost!: AdDirective;

  @Input()
 public ads: AdItem[] = [];

  interval!: any;
 private currentIndex: any = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
 

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex+1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<AdsComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
