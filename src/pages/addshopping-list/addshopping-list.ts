import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';

@IonicPage()
@Component({
  selector: 'page-addshopping-list',
  templateUrl: 'addshopping-list.html',
})
export class AddshoppingListPage {

  item:Item = {
    name:'ipad pro',
    quantity:1,
    price:700.0,
    timeStamp:new Date().getTime(),
    active:true
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public database :DatabaseServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddshoppingListPage');
  }

  addItem(item:Item){
     this.database.addItem(item).then(ref=>{
      console.log(ref.key)
      this.navCtrl.setRoot('ShoppingListPage',{key:ref.key})
    }); 
  }

}
