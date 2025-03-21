
import { NgModule } from '@angular/core';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistoricalRatesRoutingModule } from './historical-rates-routing.module';
import { RouterModule } from '@angular/router';
import { CurrencyConverterModule } from '../currency-converter/currency-converter.module';
import { HistoricalRatesComponent } from './component/historical-rates.component';
import { ChartAllModule, RangeNavigatorAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    HistoricalRatesComponent
  ],
  imports: [
    CommonModule,
    HistoricalRatesRoutingModule,
    SelectModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyConverterModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    AccumulationChartAllModule,
  ],
  exports:[
    HistoricalRatesComponent
  ]
})
export class HistoricalRatesModule { }
