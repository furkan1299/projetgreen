import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriMetauxPageRoutingModule } from './tri-metaux-routing.module';

import { TriMetauxPage } from './tri-metaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriMetauxPageRoutingModule
  ],
  declarations: [TriMetauxPage]
})
export class TriMetauxPageModule {}
