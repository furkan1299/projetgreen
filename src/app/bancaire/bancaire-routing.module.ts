import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancairePage } from './bancaire.page';

const routes: Routes = [
  {
    path: '',
    component: BancairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancairePageRoutingModule {}
