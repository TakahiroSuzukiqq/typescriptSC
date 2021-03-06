import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoService {

  result: any;

  constructor(private _http: Http) { }

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH,ETH,ETC,LTC,XRP,IOT,MONA&tsyms=USD')
      .map( result => this.result = result.json());
  }

}
