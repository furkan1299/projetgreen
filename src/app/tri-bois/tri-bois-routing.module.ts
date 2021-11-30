import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriBoisPage } from './tri-bois.page';

const routes: Routes = [
  {
    path: '',
    component: TriBoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriBoisPageRoutingModule {}
