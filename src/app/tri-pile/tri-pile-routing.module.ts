import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriPilePage } from './tri-pile.page';

const routes: Routes = [
  {
    path: '',
    component: TriPilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriPilePageRoutingModule {}
