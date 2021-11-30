import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriMetauxPage } from './tri-metaux.page';

const routes: Routes = [
  {
    path: '',
    component: TriMetauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriMetauxPageRoutingModule {}
