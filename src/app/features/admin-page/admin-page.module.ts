import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    MatListModule
  ]
})
export class AdminPageModule { }
