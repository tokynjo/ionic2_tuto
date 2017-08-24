import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {LoginPage} from '../../pages/login/login';
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {
  nom: string;
  prenom: string;
  adress: string;
  age: number;
  news: NewsApiGlobal = new NewsApiGlobal();// initialisation

  //login
  username = '';
  email = '';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private NewsApiService: NewsApiService) {
    console.log('bani');
     
    //----login--------
    /*let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];*/
  }
  modalLogin() {
     
    this.navCtrl.setRoot(LoginPage);
  
  }
   
}
