import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesRendezVousPage } from './mes-rendez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: MesRendezVousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesRendezVousPageRoutingModule {}
