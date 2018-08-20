import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  tutorial:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.tutorial =  this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
