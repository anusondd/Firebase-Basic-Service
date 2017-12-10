import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers:[DatabaseServiceProvider]
})
export class HomePageModule {}
