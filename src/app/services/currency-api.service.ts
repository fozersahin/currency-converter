import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rate} from '../models/rate';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {


  private API_URL = 'https://api.exchangeratesapi.io/latest';

  constructor(private http: HttpClient ) {}

  getCurrency(from: string, to: string): Observable<Rate> {

    return this.http.get<Rate>(this.API_URL , { params: { symbols: to, base: from }});
  }
}
