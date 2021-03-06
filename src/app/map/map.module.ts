import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule
  ],
  providers: [
    Geolocation,

  ],
  declarations: [MapPage]
})
export class MapPageModule {}
