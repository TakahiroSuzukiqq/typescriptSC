import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';                                      //#7 For using data service
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    //#5To import angular platform animation library
import { FormsModule } from '@angular/forms';                                      //#4To import form module form the Angular forms library
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { CryptoComponent } from './crypto/crypto.component';
import { CryptoService } from './services/crypto.service';
import { HttpTestService } from './services/http-test.service';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HttpTestComponent,
    CryptoComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               //#4 Add form module to "import"
    BrowserAnimationsModule,   //#5 Add BrowserAnimationModule
    HttpModule,
    HttpClientModule           //#As an alternative way of doing http request
  ],
  //providers: [],
  providers: [DataService, CryptoService, HttpTestService, WeatherService],               //#7 To use DatasSrvice component
  bootstrap: [AppComponent]
})
export class AppModule { }
