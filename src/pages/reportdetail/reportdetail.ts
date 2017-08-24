import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-reportdetail',
  templateUrl: 'reportdetail.html'
})
export class ReportDetailPage {

  //login
  username = '';
  email = '';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private auth: AuthServiceProvider) {
     
  }
}
