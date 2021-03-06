import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private fdb:AngularFireDatabase) {
  }

  getFiles(){
    let ref = this.fdb.list('Tutorials');
    return ref.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    })
  }

  getSteps(id){
    let ref = this.fdb.list('Tutorials/' + id);
    return ref.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    })
  }
 
  getCategories(){
    let ref = this.fdb.list('Categories');
    return ref.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    })
  }

}
