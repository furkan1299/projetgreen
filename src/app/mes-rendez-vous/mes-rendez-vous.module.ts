import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesRendezVousPageRoutingModule } from './mes-rendez-vous-routing.module';

import { MesRendezVousPage } from './mes-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesRendezVousPageRoutingModule
  ],
  declarations: [MesRendezVousPage]
})
export class MesRendezVousPageModule {}
