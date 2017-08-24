import { Component } from '@angular/core';
import { NavParams, NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ReportPage } from '../../pages/report/report';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(
                data => {
                  this.nav.setRoot(ReportPage);
                  this.loading.dismiss();
                },
                error => {
                  alert('Erreur');
                  this.loading.dismiss();
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
 
}
