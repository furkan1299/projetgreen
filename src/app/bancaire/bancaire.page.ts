import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bancaire',
  templateUrl: './bancaire.page.html',
  styleUrls: ['./bancaire.page.scss'],
})
export class BancairePage {

  constructor(  public alertController: AlertController, private toastr: ToastController) { }

 
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Votre commande est confirmée',
      cssClass:'my-custom-class',
      message: 'Un e-mail vous a été envoyé',
      buttons: ['OK']
    });

    await alert.present();
  }

    async presentToast() {
      const toast = await this.toastr.create({
        message: 'Vous allez être redirigés vers la page de paiement en ligne',
        duration: 600000
      });
      toast.present();
    }
}
