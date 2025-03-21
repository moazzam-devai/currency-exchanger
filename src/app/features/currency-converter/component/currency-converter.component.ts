import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { CommonService } from 'src/app/services/common.service';
import { CurrencyConversionService } from 'src/app/services/currency-conversion.service';
import {
  CurrencyError,
  DefaultBaseCurrencyAmount,
  DefaultCurrency,
  MostPopularCurrenices,
  NumberRigix,
  ParameterName,
} from 'src/app/shared/constants/common.constants';
import {
  CurrencySymbolsType,
  DefaultCurrencies,
  DefaultCurrencyConverionPair,
} from 'src/app/shared/enums/currency.enums';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  @Output() popularCurriencs = new EventEmitter<PopularCurrencyConversion[]>();
  currencyForm!: FormGroup;
  currencySymbolsType = CurrencySymbolsType;
  symbols: CurrencySymbol = {};
  popularcurriencsList: PopularCurrencyConversion[] = [];
  exchangeRate!: ExchangeRatesValue;
  query!: CurrencyConversionQuery;
  defaultBaseCurrencyAmount = DefaultBaseCurrencyAmount;
  convertedAmount?: number;
  unit?: string;
  baseCurrencyRate?: number;
  parameterValue?: string;

  constructor(
    private currencyConversionService: CurrencyConversionService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getAllCurrencySymbols();
    this.route.paramMap.subscribe((params) => {
      this.parameterValue =
        params.get(ParameterName) || '';
      this.setDefualtCurrecny();
    });
    
  }

  get numericField() {
    return this.currencyForm.get('amount');
  }

  onCurrencySelected(controlName: string, selectedSymbol: string): void {
    this.currencyForm?.get(controlName)?.setValue(selectedSymbol);
  }
  onInputChange(event: Event | any):void {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    this.numericField?.setValue(numericValue);
  }
  onConversion() {
    this.setFromToCurrencyData();
    this.convertAmountByCurrencySymbol();
    this.mostPopularCurriencs();
  }
  onSwapClick():void {
    const fromValue = this.currencyForm.get(
      this.currencySymbolsType.Base
    )?.value;
    const toValue = this.currencyForm.get(
      this.currencySymbolsType.Symbols
    )?.value;
    this.currencyForm.get(this.currencySymbolsType.Base)?.setValue(toValue);
    this.currencyForm
      .get(this.currencySymbolsType.Symbols)
      ?.setValue(fromValue);
  }
  private initializeForm():void {
    this.currencyForm = this.fb.group({
      base: [DefaultCurrency, [Validators.required]],
      symbols: ['', [Validators.required]],
      amount: [1, [Validators.required, Validators.pattern(NumberRigix)]],
    });
  }

  private getAllCurrencySymbols():void {
    this.currencyConversionService.getSymbols().subscribe({
      next: (response: SymbolsApiResponse) => {
        this.symbols = response.symbols;
        this.getLatestExchangeRates();
        this.setFromToCurrencyData();
      },
      error: (error: any) => {
        console.error(CurrencyError, error);
      },
      complete: () => {
        // TODO;
      },
    });
  }

  private getLatestExchangeRates():void {
    this.currencyForm
    .get(this.currencySymbolsType.Symbols)
    ?.setValue('');
    this.currencyConversionService
      .getLatestExchangeRates(this.currencyForm.value as LatestCurrencyQuery)
      .subscribe({
        next: (response: ExchangeRate) => {
          this.exchangeRate = response.rates;
          this.currencyForm
            ?.get(this.currencySymbolsType.Symbols)
            ?.setValue(DefaultCurrencies.USD);
            const formData = this.currencyForm.value;
            this.retrieveExchangeRateForOneCurrency(formData.base,formData.symbols);
        },
        error: (error: any) => {
          console.error(CurrencyError, error);
        },
        complete: () => {
          // TODO;
        },
      });
  }

  private convertAmountByCurrencySymbol():void {
    const formData = this.currencyForm.value;
    this.convertedAmount = this.convertCurrency(
      formData.amount,
      formData.base,
      formData.symbols,
      this.exchangeRate
    );
    this.unit = formData.symbols;
  }

  private convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    rates: ExchangeRatesValue
  ): number {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    if (fromRate === undefined || toRate === undefined) {
      console.error(CurrencyError, rates);
      return 0;
    }
    return (amount / fromRate) * toRate;
  }

 private mostPopularCurriencs():void {
    const formData = this.currencyForm.value;
    this.popularcurriencsList.length = 0;
    let popularCurrencyObjct: PopularCurrencyConversion = {
      amount: formData.amount,
      base: formData.base,
      popularConversions: {},
    };

    Object.entries(MostPopularCurrenices).forEach(([key, value]) => {
      popularCurrencyObjct.popularConversions[key] = this.convertCurrency(
        formData.amount,
        formData.base,
        key,
        this.exchangeRate
      );
    });
    this.popularcurriencsList.push(popularCurrencyObjct);
    this.popularCurriencs.emit(this.popularcurriencsList);
  }
  
 private retrieveExchangeRateForOneCurrency(fromCurrency: number,toCurrency:number):void {
  const fromRate = this.exchangeRate[fromCurrency];
    const toRate = this.exchangeRate[toCurrency];
    const baseCurrecnyExchangeRate = 1;
    this.baseCurrencyRate = 
    (baseCurrecnyExchangeRate / fromRate) * toRate;
  }
 private setDefualtCurrecny():void {
    this.currencyForm
      .get(this.currencySymbolsType.Base)
      ?.setValue(DefaultCurrencies.EUR);
    if (
      this.parameterValue ==
      DefaultCurrencyConverionPair.EURGBP
    ) {
      this.currencyForm
        .get(this.currencySymbolsType.Symbols)
        ?.setValue(DefaultCurrencies.GBP);
    } else if(this.parameterValue ==
      DefaultCurrencyConverionPair.EURUSD) {
      this.currencyForm
        .get(this.currencySymbolsType.Symbols)
        ?.setValue(DefaultCurrencies.USD);
    }
  }

  private setFromToCurrencyData(){
    const newData = { 
      base: this.currencyForm.get(
        this.currencySymbolsType.Base
      )?.value,
      symbols:this.currencyForm.get(
        this.currencySymbolsType.Symbols
      )?.value,
      fromCurencyName: this.symbols[this.currencyForm.get(
        this.currencySymbolsType.Base
      )?.value]
    };
    this.commonService.setData(newData);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
