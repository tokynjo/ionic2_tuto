import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {ReportDetailPage} from '../../pages/reportdetail/reportdetail';
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  nom: string;
  prenom: string;
  adress: string;
  age: number;
  liste: string;
  news: NewsApiGlobal = new NewsApiGlobal();// initialisation

  //login
  username = '';
  email = '';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private NewsApiService: NewsApiService, private auth: AuthServiceProvider) {
    console.log('bani');
    this.getReport();
    //----login--------
    /*let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];*/
  }
  modalLogin() {

    this.navCtrl.push('LoginPage');

  }
  getReport() {

    this.auth.getReport().subscribe(
      data => {
         this.liste = data;
      },
      error => {

      });
  }
  afficherDetails(id){
      var tab = {
       id:id
    };
    this.navCtrl.push(ReportDetailPage, tab);
  }
}
