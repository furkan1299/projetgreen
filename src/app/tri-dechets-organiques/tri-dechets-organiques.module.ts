import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriDechetsOrganiquesPageRoutingModule } from './tri-dechets-organiques-routing.module';

import { TriDechetsOrganiquesPage } from './tri-dechets-organiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriDechetsOrganiquesPageRoutingModule
  ],
  declarations: [TriDechetsOrganiquesPage]
})
export class TriDechetsOrganiquesPageModule {}
