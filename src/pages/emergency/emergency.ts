import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '../../../node_modules/@ionic-native/call-number';

@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html'
})
export class EmergencyPage {

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  ionViewOnEntry(){
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
