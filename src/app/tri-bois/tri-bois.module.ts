import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriBoisPageRoutingModule } from './tri-bois-routing.module';

import { TriBoisPage } from './tri-bois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriBoisPageRoutingModule
  ],
  declarations: [TriBoisPage]
})
export class TriBoisPageModule {}
