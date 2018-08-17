import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tutorials :Array<any> = [];
  files: Observable<any[]>;

  public items: Array<any> = [];

  passedInTuts : any;

  icons: any;
  grid:Array<Array<string>>; //Used to layout the grid interface

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, private fdb: AngularFireDatabase, public params: NavParams, private data:DataProvider) {
    this.files = this.data.getFiles();
    //this.grid = Array(Math.ceil(this.tutorials.length/2));
    

    this.passedInTuts = this.params.data;
    console.log(this.passedInTuts);
    // this.tutorials = [
    //   'Connect to WiFi',
    //   'Connect to a printer',
    //   'Organise Email',
    //   'Connect to Chromecast'
    // ]

    this.icons = [
      'wifi icon',
      'printer icon',
      'email icon',
      'chromecast icon'
    ]
  }

  ionViewWillEnter(){
    const tutListRef: firebase.database.Reference = firebase.database().ref('/');
    
    tutListRef.orderByKey().on('child_added', snapshot =>{
      this.items = [];
      snapshot.forEach(snapshot => {
        this.tutorials.push(snapshot.key);
        return false;
      })
      console.log("Homepage Key :" + snapshot.key);
      console.log("Home page " + this.tutorials);
    });
    //this.grid = Array(Math.ceil(this.tutorials.length/2));
    this.createGrid();
  }


  createGrid(){
    console.log("Tutorial page " + this.tutorials);
    let rowNum = 0; //counter to iterate over the rows in the grid
    for (let i = 0; i < this.tutorials.length; i+=2) { //iterate tutorials
      this.grid[rowNum] = Array(2); //declare two elements per row
      if (this.tutorials[i]) { //check file URI exists
        this.grid[rowNum][0] = this.tutorials[i] //insert image
      }
      if (this.tutorials[i+1]) { //repeat for the second image
        this.grid[rowNum][1] = this.tutorials[i+1]
      }
      rowNum++; //go on to the next row
    }
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

  getBackgroundImage(image){
    console.log(Image);
    return 
  }
}
