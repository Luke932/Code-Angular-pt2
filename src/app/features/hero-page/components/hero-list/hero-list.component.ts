import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { HeroStore } from '../../services/hero.store';
import { Router } from '@angular/router';
import { AppRoutings } from 'src/app/core/configs/app-routings';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {



constructor(public heroSrv: HeroService, public heroStore: HeroStore, public router: Router){}

ngOnInit(): void {
  this.heroSrv.getHeroes();
}

goToDetail(id:number) {
    this.router.navigate([AppRoutings.heroPage, 'detail', id]);
  }

}
