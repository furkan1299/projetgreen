import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancontactPageRoutingModule } from './bancontact-routing.module';

import { BancontactPage } from './bancontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancontactPageRoutingModule
  ],
  declarations: [BancontactPage]
})
export class BancontactPageModule {}
