import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriElectroniquesPageRoutingModule } from './tri-electroniques-routing.module';

import { TriElectroniquesPage } from './tri-electroniques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriElectroniquesPageRoutingModule
  ],
  declarations: [TriElectroniquesPage]
})
export class TriElectroniquesPageModule {}
