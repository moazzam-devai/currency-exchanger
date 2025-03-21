import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, MarkerSettingsModel } from '@syncfusion/ej2-angular-charts';
import { CurrencyConversionService } from 'src/app/services/currency-conversion.service';
import { Browser } from '@syncfusion/ej2-base';
import { CommonService } from 'src/app/services/common.service';
import { DataItem, HistoricalExchangeRate, LatestCurrencyQuery } from 'src/app/interfaces/currency-conversion.interface';
import { CurrencyError } from 'src/app/shared/constants/common.constants';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrls: ['./historical-rates.component.scss']
})
export class HistoricalRatesComponent implements OnInit {
  sharedData!: LatestCurrencyQuery; 
  constructor( private currencyConversionService: CurrencyConversionService, 
    private commonService: CommonService ){

  }
  ngOnInit(): void {
    this.commonService.data$.subscribe((data) => {
      this.sharedData = data;
    });
       this.getLastDaysOfLast12MonthsAsString();
  }
  public baseCurrencyData: Object[] = [];
  public data1: Object[] = [];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    valueType: 'Category'
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    //title: 'Expense',
    lineStyle: { width: 0 },
    minimum: 0,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };
  public tooltip: Object = {
    enable: true
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
  };
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public marker: MarkerSettingsModel = { visible: true };
  public width: string = Browser.isDevice ? '100%' : '90%';

  private getLastDaysOfLast12MonthsAsString(): string[] {
    const lastDaysOfMonths: string[] = [];
    const d = new Date();
    const lastYearNumber = d.getFullYear() - 1;
    for (let i = 0; i < 12; i++) {
        const currentMonthNumber = (d.getMonth() + i) % 12;
        const lastDayOfMonth = new Date(lastYearNumber + Math.floor((d.getMonth() + i) / 12), currentMonthNumber + 1, 0);
        lastDaysOfMonths.push(lastDayOfMonth.toLocaleDateString());
        this.sharedData.date = lastDayOfMonth.toISOString().split('T')[0];
        this.getLatestExchangeRates();
    }
    return lastDaysOfMonths;
}
private getLatestExchangeRates():void {
  this.currencyConversionService
    .getHistoricalConversion(this.sharedData as LatestCurrencyQuery)
    .subscribe({
      next: (response: HistoricalExchangeRate) => {
       this.mapResponseToData(response)
      },
      error: (error: any) => {
        console.error(CurrencyError, error);
      },
      complete: () => {
        // TODO;
      },
    });
}

mapResponseToData(response: HistoricalExchangeRate): void {
  const date = response.date;
  const rateValue = response.rates; // You can replace 'USD' with the desired currency code
  const rate = Object.values(rateValue)[0];
  const newDataItem: DataItem = {
    x: date,
    y: rate,
  };
  this.baseCurrencyData.push(newDataItem);
}

}

