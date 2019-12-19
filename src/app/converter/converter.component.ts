import { Component, OnInit } from '@angular/core';
import {CurrencyApiService} from '../services/currency-api.service';
import {Currency} from '../models/currency';
import {Currencies} from '../models/currencies';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  title = 'Convert page';
  log: any;
  currencyTRY: number;
  rate: number;
  rates: Currency;
  currency: Currencies;
  currencyEnum: string[];
  toValue: number;
  fromValue: number;
  to: string;
  from: string;
  constructor(public currencyService: CurrencyApiService) {}

  ngOnInit() {
    this.getCurrencies();
    this.from = this.currencyEnum[0];
    this.to = this.currencyEnum[1];
    this.toValue = 1;
  }

  convert() {
    this.currencyService.getCurrency(this.to, this.from).subscribe( data => {
      this.rates = data.rates;
      this.rate = this.rates[this.from];
      this.fromValue = this.rate * this.toValue;
    });

  }

  getCurrencies() {
     this.currencyEnum = [
       'EUR',
       'USD',
       'GBP',
       'CAD',
      'HKD',
      'ISK',
      'PHP',
      'DKK',
      'HUF',
      'CZK',
      'AUD',
      'RON',
      'SEK',
      'IDR',
      'INR',
      'BRL',
      'RUB',
      'HRK',
      'JPY',
      'THB',
      'CHF',
      'SGD',
      'PLN',
      'BGN',
      'TRY',
      'CNY',
      'NOK',
      'NZD',
      'ZAR',
      'MXN',
      'ILS',
      'KRW',
      'MYR'];
  }
}
