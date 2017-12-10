import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  itemList:Observable<Item[]>;
  search:string='';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public database :DatabaseServiceProvider
  ) {

    this.itemList = this.database.gerItemList('')
    .snapshotChanges()
    .map(changes =>{
          return changes.map( c =>({
            key : c.payload.key , ...c.payload.val()
          }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  searchItem(search:string){
    this.itemList = this.database.gerItemList(search)
    .snapshotChanges()
    .map(changes =>{
          return changes.map( c =>({
            key : c.payload.key , ...c.payload.val()
          }));
    });
  }

}
