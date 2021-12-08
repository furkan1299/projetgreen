import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypededechetsPageRoutingModule } from './typededechets-routing.module';

import { TypededechetsPage } from './typededechets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypededechetsPageRoutingModule
  ],
  declarations: [TypededechetsPage]
})
export class TypededechetsPageModule {}
