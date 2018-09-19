import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CodemapPage } from '../pages/codemap/codemap';
import { CodefriendmapPage } from '../pages/codefriendmap/codefriendmap';

// import { BagmapPage } from '../pages/bagmap/bagmap';
// import { FreplacemapPage } from '../pages/Freplacemap/Freplacemap';
// import { Code1Page } from '../pages/code1/code1';
// import { Code2Page } from '../pages/code2/code2';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // CodemapPage,
    // CodefriendmapPage,
    // BagmapPage,
    // FreplacemapPage,
    // Code1Page,
    // Code2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // CodemapPage,
    // CodefriendmapPage,
    // BagmapPage, 
    // FreplacemapPage,
    // Code1Page,
    // Code2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
