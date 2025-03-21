import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  CurrencyConversionQuery,
  CurrencySymbol,
  ExchangeRate,
  ExchangeRatesValue,
  LatestCurrencyQuery,
  PopularCurrencyConversion,
  SymbolsApiResponse,
} from 'src/app/interfaces/currency-conversion.interface';
import { CurrencyConversionService } from 'src/app/services/currency-conversion.service';
import {
  DefaultCurrency,
  MostPopularCurrenices,
} from 'src/app/shared/constants/common.constants';
import { CurrencySymbolsType } from 'src/app/shared/enums/currency.enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  // currencySymbolsType = CurrencySymbolsType;
  // symbols: CurrencySymbol = {};
  popularcurriencsList: PopularCurrencyConversion[] = [];
  // exchangeRate!: ExchangeRatesValue;
  // query!: CurrencyConversionQuery;
  // currencyForm!: FormGroup;
  // convertedAmount!: number;
  // unit!: string;

  constructor(
    private currencyConversionService: CurrencyConversionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
   // this.initializeForm();
    //this.getAllCurrencySymbols();
  }
  assignCurrenciesList(popularCurriencs:PopularCurrencyConversion[]) {
    this.popularcurriencsList = popularCurriencs;
  }
  // onCurrencySelected(controlName: string, selectedSymbol: string): void {
  //   this.currencyForm?.get(controlName)?.setValue(selectedSymbol);
  // }

  // private initializeForm() {
  //   this.currencyForm = this.fb.group({
  //     base: [DefaultCurrency, [Validators.required]],
  //     symbols: ['', [Validators.required]],
  //     amount: [1, [Validators.required, Validators.pattern('^[0-9]*$')]],
  //   });
  // }

  // private getAllCurrencySymbols() {
  //   //here im calling all currency symbols API
  //   this.currencyConversionService.getSymbols().subscribe({
  //     next: (response: SymbolsApiResponse) => {
  //       this.symbols = response.symbols;
  //       this.getLatestExchangeRates();
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching data:', error);
  //     },
  //     complete: () => {
  //       // TODO;
  //     },
  //   });
  // }

  // private getLatestExchangeRates() {
  //   this.currencyConversionService
  //     .getLatestExchangeRates(this.currencyForm.value as LatestCurrencyQuery)
  //     .subscribe({
  //       next: (response: ExchangeRate) => {
  //         this.exchangeRate = response.rates;
  //         this.currencyForm
  //           ?.get(this.currencySymbolsType.Symbols)
  //           ?.setValue('USD');
  //       },
  //       error: (error: any) => {
  //         console.error('Error fetching data:', error);
  //       },
  //       complete: () => {
  //         // TODO;
  //       },
  //     });
  // }
  // get numericField() {
  //   return this.currencyForm.get('amount');
  // }
  // onInputChange(event: Event | any) {
  //   const inputValue = (event.target as HTMLInputElement).value;
  //   const numericValue = inputValue.replace(/[^0-9]/g, '');
  //   this.numericField?.setValue(numericValue);
  // }
  // onConversion() {
  //   this.convertAmountByCurrencySymbol();
  //   this.mostPopularCurriencs();
  // }

  // private convertAmountByCurrencySymbol() {
  //   const formData = this.currencyForm.value;
  //   this.convertedAmount = this.convertCurrency(
  //     formData.amount,
  //     formData.base,
  //     formData.symbols,
  //     this.exchangeRate
  //   );
  //   this.unit = formData.symbols;
  // }

  // private convertCurrency(
  //   amount: number,
  //   fromCurrency: string,
  //   toCurrency: string,
  //   rates: ExchangeRatesValue
  // ): number {
  //   const fromRate = rates[fromCurrency];
  //   const toRate = rates[toCurrency];
  //   if (fromRate === undefined || toRate === undefined) {
  //     console.error('Invalid currency rates:', rates);
  //     return 0;
  //   }
  //   return (amount / fromRate) * toRate;
  // }

  // mostPopularCurriencs() {
  //   const formData = this.currencyForm.value;
  //   this.popularcurriencsList.length = 0;
  //   let popularCurrencyObjct: PopularCurrencyConversion = {
  //     amount: formData.amount,
  //     base: formData.base,
  //     popularConversions: {},
  //   };

  //   Object.entries(MostPopularCurrenices).forEach(([key, value]) => {
  //     popularCurrencyObjct.popularConversions[key] = this.convertCurrency(
  //       formData.amount,
  //       formData.base,
  //       key,
  //       this.exchangeRate
  //     );
  //   });
  //   this.popularcurriencsList.push(popularCurrencyObjct);
  // }
  // onSwapClick() {
  //   const fromValue = this.currencyForm.get(
  //     this.currencySymbolsType.Base
  //   )?.value;
  //   const toValue = this.currencyForm.get(
  //     this.currencySymbolsType.Symbols
  //   )?.value;
  //   this.currencyForm.get(this.currencySymbolsType.Base)?.setValue(toValue);
  //   this.currencyForm
  //     .get(this.currencySymbolsType.Symbols)
  //     ?.setValue(fromValue);
  // }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
