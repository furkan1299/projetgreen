import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recap2PageRoutingModule } from './recap2-routing.module';

import { Recap2Page } from './recap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recap2PageRoutingModule
  ],
  declarations: [Recap2Page]
})
export class Recap2PageModule {}
