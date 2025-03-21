import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrencyConversionQuery, CurrencyConversionResponse, ExchangeRate, HistoricalExchangeRate, LatestCurrencyQuery, SymbolsApiResponse } from '../interfaces/currency-conversion.interface';
import { ApiConfig } from '../shared/constants/api-config';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  constructor(private http: HttpClient) {}

  convertCurrency(query: CurrencyConversionQuery): Observable<CurrencyConversionResponse> {
    const params = new HttpParams({  fromObject: {
      from: query.from,
      to: query.to,
      amount: query.amount.toString(),
    } });

    return this.http.get<CurrencyConversionResponse>(ApiConfig.convert, { params });
  }
  getLatestExchangeRates(query: LatestCurrencyQuery): Observable<ExchangeRate> {
    const params = new HttpParams({  fromObject: {
      base: query.base,
      symbols: query.symbols
    } });
    return this.http.get<ExchangeRate>(ApiConfig.latest, { params });
  }

  getConvertedRateByCurrency(query: CurrencyConversionQuery): Observable<ExchangeRate> {
    const params = new HttpParams({  fromObject: {
      base: query.from,
      symbols: query.to
    } });

    return this.http.get<ExchangeRate>(ApiConfig.latest, { params });
  }
  getSymbols(): Observable<SymbolsApiResponse> {
    return this.http.get<SymbolsApiResponse>(ApiConfig.symbols);
  }
  getHistoricalConversion(query: LatestCurrencyQuery): Observable<HistoricalExchangeRate> {
    const params = new HttpParams({  fromObject: {
      base: query.base,
      symbols: query.symbols
    } });

    return this.http.get<HistoricalExchangeRate>(`${ApiConfig.historical}${query.date}`, { params });
  }

}
