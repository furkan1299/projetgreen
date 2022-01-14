import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],

})

export class RecapitulatifPage {
  constructor(
    private router: Router,
  ) { }
  
  
bancaire(){
    this.router.navigate(['/bancaire']);
}
bancontact(){
  this.router.navigate(['/bancontact']);
}
virement(){
  this.router.navigate(['/virement']);
}
}
