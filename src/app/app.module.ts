import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, /*HttpClient*/ } from '@angular/common/http';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { CategoriaSavePage } from './../pages/categoria-save/categoria-save';

//Services
import { UserServiceProvider } from '../providers/user-service';
import { ForumServiceProvider } from '../providers/forum.service';
import { DefaultService } from '../providers/default.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriaSavePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriaSavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    ForumServiceProvider,
    DefaultService
  ]
})
export class AppModule {}
