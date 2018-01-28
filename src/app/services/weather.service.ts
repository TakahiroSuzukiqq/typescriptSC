import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  result: any;
  
  // constructor(private _http: HttpClient) { }
  constructor(private _http: Http) { }       //#Instead of using Http, use HttpClient at this time

  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      // .map(result => result);
      .map (result => this.result = result.json());
  }

}
