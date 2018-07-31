import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;
  password:string;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.push(HomePage)
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
    
    
    
  }
}
