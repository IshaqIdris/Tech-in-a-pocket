import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import {SlidesPage} from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  files: Observable<any[]>;
  steps: Observable<any[]>;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, private fdb: AngularFireDatabase, public params: NavParams, private data:DataProvider) {
    this.files = this.data.getFiles();
    console.log(this.files);
  }


  signIn(){
    
    const modal = this.modalCtrl.create(WelcomePage);
    modal.present();
  }

  tutorialClick(tutorial){
    console.log(tutorial);
    //this.steps = this.data.getSteps(tutorial);
    //console.log(this.steps);
    this.navCtrl.push(SlidesPage, tutorial);
  }

  getIcon(tutorial) {
    // for all tutorials 
    //   find matching tutorial
    //   get index
    //   get corresponding icon from icons using index
    return 'star';
  }

  getBackgroundImage(image){
    console.log(Image);
    return 
  }
}
