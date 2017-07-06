import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactlistPage  } from '../pages/contactlist-page/contactlist-page'
import { CurrentuserPage } from '../pages/currentuser-page/currentuser-page'
import { LoginPage } from '../pages/login-page/login-page'
import { SignupPage } from '../pages/signup-page/signup-page'

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  authed:boolean = false


  rootPage: any = ContactlistPage;

  pages: Array<{title: string, component: any}>;

  AuthedPages:Array<{title:string,component:any}> = [
    { title: 'Contat', component: ContactlistPage },
    { title: 'CurrentUser', component: CurrentuserPage }
  ];

  nonAuthedPages:Array<{title:string,component:any}> = [
    { title: 'Sign Up', component: SignupPage },
    { title: 'Login In', component: LoginPage }
  ]

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    if (this.authed){
      this.pages = this.AuthedPages;
    }else{
      this.pages = this.nonAuthedPages;
    }

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
