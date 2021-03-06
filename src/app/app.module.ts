import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StoragePage } from '../pages/storage/storage';
import { SqliteStoragePage } from '../pages/sqlitestorage/sqlitestorage';
import { AccueilPage } from '../pages/accueil/accueil';
import { ReportPage } from '../pages/report/report';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetailsPage } from '../pages/details/details';
import {NewsApiService} from '../services/newsapi.service';
import {HttpModule} from '@angular/http';

//-----------native storage ----------------------------
import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite } from '@ionic-native/sqlite';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {ReportDetailPage} from '../pages/reportdetail/reportdetail';
import {LoginPage} from '../pages/login/login';
// login -----------------
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    StoragePage,
    SqliteStoragePage,
    AccueilPage,
    ReportPage,
    ReportDetailPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    StoragePage,
    SqliteStoragePage,
    AccueilPage,
    ReportPage,
    ReportDetailPage,LoginPage
  ],
  providers: [
    NativeStorage,
    SQLite,
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
