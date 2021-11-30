import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriPeinturesVernisPageRoutingModule } from './tri-peintures-vernis-routing.module';

import { TriPeinturesVernisPage } from './tri-peintures-vernis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriPeinturesVernisPageRoutingModule
  ],
  declarations: [TriPeinturesVernisPage]
})
export class TriPeinturesVernisPageModule {}
