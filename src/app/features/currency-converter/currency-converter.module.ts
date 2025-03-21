
import { NgModule } from '@angular/core';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './component/currency-converter.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';


@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    SelectModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    CurrencyConverterComponent
  ]
})
export class CurrencyConverterModule { }
