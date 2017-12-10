import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddshoppingListPage } from './addshopping-list';

@NgModule({
  declarations: [
    AddshoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddshoppingListPage),
  ],
  providers:[]
})
export class AddshoppingListPageModule {}
