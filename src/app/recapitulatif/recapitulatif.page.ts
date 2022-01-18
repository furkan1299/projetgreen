import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],

})

export class RecapitulatifPage {
  data : any;
  total: any;
  price = Math.floor(Math.random() * (550 - 400 +1)) + 400;
  myArray : any;
  clean = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {this.data = this.activatedRoute.snapshot.paramMap.get('xyz');
    const myArray = this.data.split(',');
    this.total = this.price * this.data[90];
   }
  
  
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
