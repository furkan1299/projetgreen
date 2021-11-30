import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriPilePageRoutingModule } from './tri-pile-routing.module';

import { TriPilePage } from './tri-pile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriPilePageRoutingModule
  ],
  declarations: [TriPilePage]
})
export class TriPilePageModule {}
