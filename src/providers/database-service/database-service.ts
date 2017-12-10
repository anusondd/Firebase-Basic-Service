import { Injectable } from '@angular/core';
import {  AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../models/item';


@Injectable()
export class DatabaseServiceProvider {

  items = this.db.list<Item>('items');
  

  constructor(
    private  db : AngularFireDatabase
  ) {}

  gerItemList(key:string){
    if(key!=''){
      return this.db.list<Item>('items',
        ref=>ref.orderByChild('name').equalTo(key)
      );      
    }else{
      return this.db.list<Item>('items')
    }
    
  }

  addItem(item:Item){
    return this.items.push(item);
  }

  editItem(item:Item){
    return this.items.update(item.key,item);
  }

  removeItem(item:Item){
    return this.items.remove(item.key);
  }

}
