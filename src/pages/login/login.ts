import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AngularFireAuth} from 'angularfire2/auth'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(data => {
      console.log('got data ', data);
      this.alert('Welcome!');
      this.navCtrl.push(TabsPage);
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });

    
  }
}
