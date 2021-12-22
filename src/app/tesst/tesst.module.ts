import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesstPageRoutingModule } from './tesst-routing.module';

import { TesstPage } from './tesst.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesstPageRoutingModule,
    NgCalendarModule

  ],
  declarations: [TesstPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class TesstPageModule {}



