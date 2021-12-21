import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adam',
  templateUrl: './adam.page.html',
  styleUrls: ['./adam.page.scss'],
})
export class AdamPage {

  constructor(
    private auth: AuthService,
    private router: Router,
    public alertController: AlertController
  ) { }

  

    async logout()
  {
    const alert = await this.alertController.create({
      header: 'Se déconnecter de Greenium!',
      message: 'Voulez-vous vraiment <strong>vous déconnecter ?</strong>',
      buttons: [
      {
      text: 'Annuler',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('Confirm Cancel: blah');
      }
    }, {
      text: 'Me déconnecter',
      handler: () => {this.auth.signOut();
        console.log('Confirm Okay');
      }
    }
  ]
  });
  
  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
  }
  gotoProfile()
  {
    this.router.navigate(['/profile']);
  }
  nous(){
    this.router.navigate(['/a-propos-de-nous']);
  }
  edit(){
    this.router.navigate(['/profile/edit']);
  }
  guide(){
    this.router.navigate(['/guide']);
}

}
