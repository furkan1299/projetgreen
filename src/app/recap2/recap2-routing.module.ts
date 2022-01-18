import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recap2Page } from './recap2.page';

const routes: Routes = [
  {
    path: '',
    component: Recap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recap2PageRoutingModule {}
