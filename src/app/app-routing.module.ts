import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';              //#6 routing
import { AboutComponent } from './about/about.component';           //#6 routing
import { HttpTestComponent } from './http-test/http-test.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {                                                               //#6 Inside the array open {} and add object to define each path
    path: '',                                                     //#6 home
    component: HomeComponent
  },
  {                                                               //#6 
    path: 'about/:id',                                            //#6 about
    component: AboutComponent
  },
  {
    path: 'http-test',
    component: HttpTestComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
