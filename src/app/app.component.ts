import { Component, ViewChild ,ErrorHandler, NgModule} from '@angular/core';
import { Nav, Platform, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ListPage } from '../pages/list/list';
import { StoragePage } from '../pages/storage/storage';
import { ReportPage } from '../pages/report/report';
import { SqliteStoragePage } from '../pages/sqlitestorage/sqlitestorage';

// login -----------------
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = 'LoginPage';
 // rootPage: any = HomePage;
 rootPage: any =ReportPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    console.log('eto');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title:'Storage', component:StoragePage},
      {title:'Sqlite storage',component: SqliteStoragePage},
      {title:'Accueil', component: AccueilPage},
      {title:'Rapport', component: ReportPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
