import { Component, OnInit } from '@angular/core';
import {CurrencyApiService} from '../services/currency-api.service';
import {Rate} from '../models/rate';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  log: any;
  currencyTRY: number;
  rate: Rate
  constructor(public currencyService: CurrencyApiService) { }

  ngOnInit() {
    this.currencyService.getCurrency('EUR', 'TRY').subscribe(data  =>  {
      this.rate = data;
      console.log(this.rate);
      this.currencyTRY = this.rate.rates.TRY;
    });
  }
}
