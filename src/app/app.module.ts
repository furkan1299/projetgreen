import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgCalendarModule } from 'ionic2-calendar';

import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Auth Service
import { AuthService } from './services/auth.service';

// Auth Guard
import { AuthGuard } from './guards/auth.guard';
import { StatusBar } from '@capacitor/status-bar';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgCalendarModule,

      
    ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
