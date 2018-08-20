import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CategoryPage } from '../category/category';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataF: DataProvider)  {
    this.categories = dataF.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  categoryClick(category){
    console.log(category);
    this.navCtrl.push(CategoryPage, category);
  }

}
