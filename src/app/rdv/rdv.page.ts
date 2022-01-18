import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TriDechetsOrganiquesPage } from '../tri-dechets-organiques/tri-dechets-organiques.page';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {
  public type:string;
  public taille:string;
  public date:string;
  public periode:string;
  public commentaires:string;

  constructor(
    private router:Router,
    private location: Location

  ) { }

  postData(){
    let d = {
      type: this.type,
      taille: this.taille,
      date: this.date,
      periode: this.periode,
      commentaires: this.commentaires

    }
    this.router.navigate(['recapitulatif/'+JSON.stringify(d)])
  }
  ngOnInit() {
  }

}
