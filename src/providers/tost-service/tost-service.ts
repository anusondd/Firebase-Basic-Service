import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class TostServiceProvider {

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController
  ) {
    console.log('Hello TostServiceProvider Provider');
  }

  presentToast(text:string,time:number) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

}
