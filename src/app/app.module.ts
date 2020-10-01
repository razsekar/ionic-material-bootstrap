import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    BsDatepickerModule.forRoot(), 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [BrowserAnimationsModule, BsDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
