import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  objectKeys = Object.keys;
  kawase: any;
  getRates: string;

  constructor(private _atai: ExchangeService) { }

  ngOnInit() {
    this._atai.getExchange()
      .subscribe(result => {
        this.kawase = result;
        console.log(result)
      })
    this._atai.getExchange()
      .subscribe(
        rate => this.getRates = JSON.stringify(rate),
        error => alert(error),
          () => console.log("Done!")
      );
  }

}

