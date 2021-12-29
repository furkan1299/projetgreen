import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.page.html',
  styleUrls: ['./virement.page.scss'],
})
export class VirementPage{
  events: Observable<any[]>;


  constructor(public firestore: AngularFirestore) {
    this.events = this.firestore.collection('events').valueChanges();
    
   }

   

}
