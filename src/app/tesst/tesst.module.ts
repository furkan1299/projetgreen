import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesstPageRoutingModule } from './tesst-routing.module';

import { TesstPage } from './tesst.page';

import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesstPageRoutingModule,
    NgCalendarModule
    
  ],
  declarations: [TesstPage]
})
export class TesstPageModule {}



