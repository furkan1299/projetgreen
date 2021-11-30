import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriPageRoutingModule } from './tri-routing.module';

import { TriPage } from './tri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriPageRoutingModule
  ],
  declarations: [TriPage]
})
export class TriPageModule {}
