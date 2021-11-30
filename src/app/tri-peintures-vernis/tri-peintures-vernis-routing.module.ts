import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriPeinturesVernisPage } from './tri-peintures-vernis.page';

const routes: Routes = [
  {
    path: '',
    component: TriPeinturesVernisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriPeinturesVernisPageRoutingModule {}
