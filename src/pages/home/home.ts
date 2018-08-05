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

  tutorials = {};
  listOfTuts: Array<any> = [];
  output = document.getElementById('output');
  constructor(public navCtrl: NavController, public modalCtrl:ModalController, private fdb: AngularFireDatabase) {
  
    
  }

  ionViewDidLoad(){
    const tutRef: firebase.database.Reference = firebase.database().ref('/Tutorials/connect to wifi/');
    tutRef.on('value', tutSnapshot => {
      this.tutorials = tutSnapshot.val();
      console.log(JSON.stringify(this.tutorials));
      for (var key in this.tutorials) {
        if (this.tutorials.hasOwnProperty(key)) {
            console.log(key + " -> " + this.tutorials[key]);
        }
    }
    });
    const tutListRef: firebase.database.Reference = firebase.database().ref('/Tutorials/');
    tutRef.orderByKey().on('child_added', function(snapshot){
      console.log(snapshot.key);
    });


  }

  signIn(){
    const modal = this.modalCtrl.create(WelcomePage);
    modal.present();
  }

}
