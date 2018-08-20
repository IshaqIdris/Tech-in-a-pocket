import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {EmergencyPage} from '../pages/emergency/emergency';
import {LoginPage} from '../pages/login/login';
import {WelcomePage} from '../pages/welcome/welcome';
import {RegisterPage} from '../pages/register/register';
import { LoadingPage } from '../pages/loading/loading';
import {SlidesPage} from '../pages/slides/slides';
import {CategoryPage} from '../pages/category/category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FavouritesPage } from '../pages/favourites/favourites';
import { CategoriesPage } from '../pages/categories/categories';
import { DataProvider } from '../providers/data/data';

import {CallNumber} from '@ionic-native/call-number'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmergencyPage,
    LoginPage,
    WelcomePage,
    RegisterPage,
    LoadingPage,
    FavouritesPage,
    CategoriesPage,
    SlidesPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmergencyPage,
    LoginPage,
    WelcomePage,
    RegisterPage,
    LoadingPage,
    FavouritesPage,
    CategoriesPage,
    SlidesPage,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataProvider,
    CallNumber
  ]
})
export class AppModule {}
