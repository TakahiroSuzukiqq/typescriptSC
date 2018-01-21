import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http'

@Injectable()
export class HttpTestService {
  
  //kekka: any;

  constructor(private _http: Http) {}

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com')
       .map(res => res.json())
      //.map(result => this.kekka = result.json())   //#Or you could also do like this, using kekka property above
  }

  postJSON() {
    var json = JSON.stringify({ 
      var1: 'test', 
      var2: 3 
    });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');  //#the header attached to a post request
    
    return this._http.post('http://validate.jsontest.com', params, {
      headers: headers
    })
    .map(res => res.json());
  }

}
