import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  site = {
    url: 'javasampleapproach.com',
    description: 'Java Technology - Spring Framework'
  };

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.db.list('site').push(this.site);
  }

}
