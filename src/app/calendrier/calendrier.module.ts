import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierPageRoutingModule } from './calendrier-routing.module';

import { CalendrierPage } from './calendrier.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierPageRoutingModule,
    NgCalendarModule

  ],
  declarations: [CalendrierPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CalendrierPageModule {}



