import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.page.html',
  styleUrls: ['./virement.page.scss'],
})
export class VirementPage{

  data : any;
  myArray : any;

  constructor(  public alertController: AlertController, private toastr: ToastController, private activatedRoute: ActivatedRoute) { 
    this.data = this.activatedRoute.snapshot.paramMap.get('xyz');
  }
  

  
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

