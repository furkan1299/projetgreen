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
  @ViewChild('myNav') nav: NavController
 
  categories = [{
    name: 'Payer par carte bancaire',
    value: false
  }, {
    name: 'Payer par PayPal',
    value: false
  }, {
    name: 'Payer par virement bancaire',
    value: false
  }];

  selection(name: string) {
    this.categories.forEach(x => {
      if (x.name !== name) {
        x.value = !x.value
      }
    })
  }
  bancaire(){
    this.router.navigate(['/bancaire']);
}

}
