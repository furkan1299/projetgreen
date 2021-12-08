import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesstPage } from './tesst.page';

const routes: Routes = [
  {
    path: '',
    component: TesstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesstPageRoutingModule {}
