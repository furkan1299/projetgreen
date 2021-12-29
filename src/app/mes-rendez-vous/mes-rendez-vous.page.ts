import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes-rendez-vous',
  templateUrl: './mes-rendez-vous.page.html',
  styleUrls: ['./mes-rendez-vous.page.scss'],
})
export class MesRendezVousPage {

  events: Observable<any[]>;


  constructor(public firestore: AngularFirestore) {
    this.events = this.firestore.collection('events').valueChanges();
    

    
   }

}
