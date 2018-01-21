import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  objectKeys = Object.keys; 
  cryptos: any;

  constructor(private _data: CryptoService) { }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      })
  }

}
