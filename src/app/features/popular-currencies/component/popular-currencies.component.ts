import { Component, Input, OnInit } from '@angular/core';
import { PopularCurrencyConversion } from 'src/app/interfaces/currency-conversion.interface';

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.scss']
})
export class PopularCurrenciesComponent implements OnInit {

  @Input() popularcurriencs:PopularCurrencyConversion[]=[];

  ngOnInit(): void {
  }
  getConversions(conversions: { [key: string]: number }): { currencyCode: string, conversionRate: number }[] {
    return Object.entries(conversions).map(([currencyCode, conversionRate]) => ({
      currencyCode,
      conversionRate
    }));
  }
}
