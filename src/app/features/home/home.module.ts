
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PopularCurrenciesModule } from '../popular-currencies/popular-currencies.module';
import { CommonModule } from '@angular/common';
import { CurrencyConverterModule } from '../currency-converter/currency-converter.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    PopularCurrenciesModule,
    CurrencyConverterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
