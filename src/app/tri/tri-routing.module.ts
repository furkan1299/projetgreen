import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriPage } from './tri.page';

const routes: Routes = [
  {
    path: '',
    component: TriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriPageRoutingModule {}
