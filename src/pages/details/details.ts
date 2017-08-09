import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  nom:string;
  prenom:string;
  adress:string;
  age:number;
  constructor(public navCtrl: NavController,private NavParams:NavParams) {
           this.nom = NavParams.get('nom');
            console.log(this.nom,'---------');
  }
   
}
