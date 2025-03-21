
import { NgModule } from '@angular/core';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyDetailsComponent } from './component/currency-details.component';
import { CurrencyDetailsRoutingModule } from './currency-details-routing.module';
import { RouterModule } from '@angular/router';
import { CurrencyConverterModule } from '../currency-converter/currency-converter.module';
import { HistoricalRatesModule } from '../historical-rates/historical-rates.module';


@NgModule({
  declarations: [
    CurrencyDetailsComponent
  ],
  imports: [
    CommonModule,
    CurrencyDetailsRoutingModule,
    SelectModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyConverterModule,
    HistoricalRatesModule
  ],
  exports:[
    CurrencyDetailsComponent
  ]
})
export class PopularCurrenciesModule { }
