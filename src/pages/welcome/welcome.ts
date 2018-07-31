import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage}  from '../login/login'
import { RegisterPage } from '../register/register';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loginEmail(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

  signFB(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    this.fire.auth.signOut();
  }
}

