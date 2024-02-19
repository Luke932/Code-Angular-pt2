import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page.component';
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [{
    path: '',
    component: HeroPageComponent,
    children: [
      {
        path: 'add',
        component: HeroAddComponent,
      },
      {
        path: 'list',
        component: HeroListComponent,
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroPageRoutingModule {}
