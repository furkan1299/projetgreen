import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reserve',
  templateUrl: 'reserve.page.html',
  styleUrls: ['reserve.page.scss']
})
export class ReservePage {

  public selected_vol;
  public selected_cat;
  public date;
  public price;


  calcul1(){
    if(this.selected_vol == "8 pieds " && this.selected_cat == "Encombrants"){
      alert("Le prix est de 30€ ");
    }
    else if(this.selected_vol == "12 pieds" && this.selected_cat == "Encombrants"){
      alert("Le prix est de 60€ ");
    }
    else if(this.selected_vol == "20 pieds" && this.selected_cat == "Encombrants"){
      alert("Le prix est de 90€ ");
      }
      else if(this.selected_vol == "8 pieds " && this.selected_cat == "Toxiques   "){

        alert("Le prix est de 40€ ");
      }
      else if(this.selected_vol == "12 pieds" && this.selected_cat == "Toxiques   "){
    
        alert("Le prix est de 80€ ");
      }
      else if(this.selected_vol == "20 pieds" && this.selected_cat == "Toxiques   "){
        alert("Le prix est de 120€ ");
      }
      else if(this.selected_vol == "8 pieds " && this.selected_cat == "Mixtes     "){
      
        alert("Le prix est de 50€ ");
      }
      else if(this.selected_vol == "12 pieds" && this.selected_cat == "Mixtes     "){
      
        alert("Le prix est de 100€ ");
      }
      else if(this.selected_vol == "20 pieds" && this.selected_cat == "Mixtes     "){
      
        alert("Le prix est de 150€ ");
      }
  }
calcul(){
  if(this.selected_vol == "8 pieds " && this.selected_cat == "Encombrants"){
    this.price = '30 '; 
    return this.price 
  }
  else if(this.selected_vol == "12 pieds" && this.selected_cat == "Encombrants"){
    this.price = '60 ';
    return this.price
  }
  else if(this.selected_vol == "20 pieds" && this.selected_cat == "Encombrants"){
    this.price = '90 ';
    return this.price
  }
  else if(this.selected_vol == "8 pieds " && this.selected_cat == "Toxiques   "){
    this.price = '40 ';
    return this.price
  }
  else if(this.selected_vol == "12 pieds" && this.selected_cat == "Toxiques   "){
    this.price = '80 ';
    return this.price
  }
  else if(this.selected_vol == "20 pieds" && this.selected_cat == "Toxiques   "){
    this.price = '120';
    return this.price
  }
  else if(this.selected_vol == "8 pieds " && this.selected_cat == "Mixtes     "){
    this.price = '50 ';
    return this.price
  }
  else if(this.selected_vol == "12 pieds" && this.selected_cat == "Mixtes     "){
    this.price = '100';
    return this.price;
  }
  else if(this.selected_vol == "20 pieds" && this.selected_cat == "Mixtes     "){
    this.price = '150';
  }
}

hourValues = ['08','09','10','11','12','13','14','15','16','17','18'];
minuteValues = ['0','15','30','45'];


  postData(){
    this.calcul();
    let d = {
      type: this.selected_cat,
      taille: this.selected_vol,
      date: this.date,
      price: this.price
    }
    this.router.navigate(['recap2/'+JSON.stringify(d)])}
  
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

  

  constructor(  
    private alertController: AlertController,
    private router:Router,
    private location: Location) {}



}
