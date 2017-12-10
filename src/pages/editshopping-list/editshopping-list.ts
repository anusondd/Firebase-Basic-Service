import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { TostServiceProvider } from '../../providers/tost-service/tost-service';



@IonicPage()
@Component({
  selector: 'page-editshopping-list',
  templateUrl: 'editshopping-list.html',
})
export class EditshoppingListPage {

  item:Item;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public database :DatabaseServiceProvider,
    public tost : TostServiceProvider
  ) {
    this.item = this.navParams.get('item');
    console.log('EditshoppingListPage',this.item);
  }

  ionViewDidLoad() {}

  saveItem(item:Item){
      this.database.editItem(item).then(()=>{
        this.navCtrl.setRoot('ShoppingListPage')
        this.tost.presentToast(item.name+' Update',3000);
      })
  }

  remove(item:Item){
    this.database.removeItem(item).then(()=>{
      this.navCtrl.setRoot('ShoppingListPage')
      this.tost.presentToast(item.name+' Delete',3000);
  })
}

}
