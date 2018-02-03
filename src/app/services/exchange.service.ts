import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {

  result: any;

  constructor(private _http: Http) { }

  getExchange() {
    return this._http.get('https://api.fixer.io/latest?base=USD')
      .map (result => this.result = result.json());
      // .map (result => result.json())
  }

}