import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

// natife compomment
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'storage',
  templateUrl: 'storage.html'
})
export class StoragePage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  private nom: string;
  private prenom: string;
  private age: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, public alertCtrl: AlertController) {

  }

  public storeIdentity(): void {
    this.nativeStorage.setItem('my-identify-card', {
      nom: this.nom,
      prenom: this.prenom,
      age: this.age
    })
      .then(
      () => {
        let alert = this.alertCtrl.create({
          title: 'Information saved!!',
          subTitle: 'Votre identité est sauvé avec succés',
          buttons: ['Nice']
        });
        alert.present();
      },
      error => console.error('Error storing item', error)
      );
  }

  public getMyName(): void {
    this.nativeStorage.getItem('my-identify-card')
      .then(
      data => {
        this.nom = data.nom,
        this.prenom = data.prenom,
        this.age = data.age
      },
      error => console.error(error)
      );
  }
}
