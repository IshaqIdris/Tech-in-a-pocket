import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  items: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private fdb: AngularFireDatabase) {
  
  }

  ionViewDidLoad() {
    this.fdb.database.ref('/Tutorials/');
    const tutListRef: firebase.database.Reference = this.fdb.database.ref('/Tutorials/');
    tutListRef.orderByKey().on('child_added', snapshot =>{
      this.items = [];
      snapshot.forEach(snapshot => {
        this.items.push(snapshot.key);
        return false;
      })
      console.log(snapshot.key);
    });

    console.log('ionViewDidLoad LoadingPage');
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    
    this.navCtrl.push(TabsPage);
    console.log(this.items.length);
    console.log(this.items.toString);
  }

}
