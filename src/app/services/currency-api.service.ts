import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rate} from '../models/rate';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {


  private API_URL = 'https://api.exchangeratesapi.io/';

  constructor(private http: HttpClient ) {}

  getCurrency(from: string, to: string): Observable<Rate> {

    return this.http.get<Rate>(this.API_URL + 'latest' , { params: { symbols: to, base: from }});
  }

  getMonthlyCurrency(from: string, to: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'history' , { params:
        { start_at: startDate, end_at: endDate, symbols: to, base: from }}).pipe(
          map(result => {result => result.rates}));
  }
}
