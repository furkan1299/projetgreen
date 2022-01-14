import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  user:any;
  constructor
  (
private router: Router,
private auth: AuthService
  ){}
  
  ngOnInit() {
  this.auth.user$.subscribe(user => {
  this.user = user;
})
   }
   edit(){
    this.router.navigate(['/profile/edit']);
  }
 }
