import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {NewsApiGlobal} from '../../models/newsapi-global.model';
import {NewsApiService} from '../../services/newsapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nom:string;
  prenom:string;
  adress:string;
  age:number;
  news:NewsApiGlobal = new NewsApiGlobal();// initialisation
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private NewsApiService:NewsApiService) {
      console.log('constructeur');
      this.NewsApiService.getArticles()
      .then(newFetched=>{
        this.news = newFetched;
        console.log(this.news);
      });
      
  }
  alertAction():void{
  	console.log('bouton');
  	let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  private showDetails():void{ 
    var tab = {
      nom:this.nom,
      prenom:this.prenom,
      adress:this.adress,
      age:this.age
    };
    this.navCtrl.push(DetailsPage,tab );
  }
}
