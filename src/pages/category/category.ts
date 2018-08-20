import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { SlidesPage } from '../slides/slides';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category:any;
  files:Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataF:DataProvider) {
    this.category = navParams.data;
    this.files = this.dataF.getFiles();
    console.log(this.files);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  tutorialClick(tutorial){
    console.log(tutorial);
    //this.steps = this.data.getSteps(tutorial);
    //console.log(this.steps);
    this.navCtrl.push(SlidesPage, tutorial);
  }
}
