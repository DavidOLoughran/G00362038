import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StayactivePageRoutingModule } from './stayactive-routing.module';

import { StayactivePage } from './stayactive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StayactivePageRoutingModule
  ],
  declarations: [StayactivePage]
})
export class StayactivePageModule {}
