import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriDechetsOrganiquesPage } from './tri-dechets-organiques.page';

const routes: Routes = [
  {
    path: '',
    component: TriDechetsOrganiquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriDechetsOrganiquesPageRoutingModule {}
