import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriElectroniquesPage } from './tri-electroniques.page';

const routes: Routes = [
  {
    path: '',
    component: TriElectroniquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriElectroniquesPageRoutingModule {}
