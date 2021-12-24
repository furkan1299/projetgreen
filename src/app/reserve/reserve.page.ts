import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-reserve',
  templateUrl: 'reserve.page.html',
  styleUrls: ['reserve.page.scss']
})
export class ReservePage {

  public selected_vol;
  public selected_cat;

calcul(){
  if(this.selected_vol == "v1" && this.selected_cat == "cat1"){
      alert("Le prix est de 30€ ");
  }
  else if(this.selected_vol == "v2" && this.selected_cat == "cat1"){
      alert("Le prix est de 60€ ");
  }
  else if(this.selected_vol == "v3" && this.selected_cat == "cat1"){
    alert("Le prix est de 90€ ");
}
else if(this.selected_vol == "v1" && this.selected_cat == "cat2"){
  alert("Le prix est de 40€ ");
}
else if(this.selected_vol == "v2" && this.selected_cat == "cat2"){
  alert("Le prix est de 80€ ");
}
else if(this.selected_vol == "v3" && this.selected_cat == "cat2"){
  alert("Le prix est de 120€ ");
}
else if(this.selected_vol == "v1" && this.selected_cat == "cat3"){
  alert("Le prix est de 50€ ");
}
else if(this.selected_vol == "v2" && this.selected_cat == "cat3"){
  alert("Le prix est de 100€ ");
}
else if(this.selected_vol == "v3" && this.selected_cat == "cat3"){
  alert("Le prix est de 150€ ");
}
}

hourValues = ['08','09','10','11','12','13','14','15','16','17','18'];
minuteValues = ['0','15','30','45'];



showVol(){

  console.log(this.selected_vol);

}

showCat(){

  console.log(this.selected_cat);

}


async affiche(){
  const alert = await this.alertController.create({
    cssClass: 'alert-buttons',
    header: 'Notre conteneur de 8 pieds standard est probablement le produit le plus modeste de notre gamme. ',
    message: `<img src="../../assets/slider/bb.png">`,
    buttons: [
      {
        text: "D'accord",
        cssClass: 'btns-modal-alert',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      },
    ]
  });

  await alert.present();
}

  

  constructor(  private alertController: AlertController) {}



}
