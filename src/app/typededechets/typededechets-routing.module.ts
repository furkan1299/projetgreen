import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypededechetsPage } from './typededechets.page';

const routes: Routes = [
  {
    path: '',
    component: TypededechetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypededechetsPageRoutingModule {}
