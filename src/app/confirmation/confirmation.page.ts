import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  data : any;
  myArray : any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.data = this.activatedRoute.snapshot.paramMap.get('xyz');
    
   }
  

  ngOnInit() {
  }

  recap(){
    const myArray = this.data.split(',');
    alert(myArray[0])
  }
  // sorting(){
  //   myArray = recap();
  //   const myArray2 = this.myArray.split(':');
  //   alert(myArray2[0]);
  // }
}
