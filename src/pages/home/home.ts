import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tutorials :any;
  public items: Array<any> = [];

  icons: any;


  constructor(public navCtrl: NavController, public modalCtrl:ModalController, private fdb: AngularFireDatabase) {
  
    this.tutorials = [
      'Connect to WiFi',
      'Connect to a printer',
      'Organise Email',
      'Connect to Chromecast'
    ]

    this.icons = [
      'wifi icon',
      'printer icon',
      'email icon',
      'chromecast icon'
    ]
    
  }

  ionViewDidLoad(){
    const tutListRef: firebase.database.Reference = firebase.database().ref('/Tutorials/');
    
    tutListRef.orderByKey().on('child_added', snapshot =>{
      this.items = [];
      snapshot.forEach(snapshot => {
        this.items.push(snapshot.key);
        return false;
      })
      
      console.log(snapshot.key);
    });
    

  }

  signIn(){
    
    const modal = this.modalCtrl.create(WelcomePage);
    modal.present();
  }

  tutorialClick(tutorial){
    console.log(tutorial);
  }

  getIcon(tutorial) {
    // for all tutorials 
    //   find matching tutorial
    //   get index
    //   get corresponding icon from icons using index
    return 'star';
  }
}
