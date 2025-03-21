
import { NgModule } from '@angular/core';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PopularCurrenciesComponent } from './component/popular-currencies.component';
import { PopularCurrenciesRoutingModule } from './popular-currencies-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PopularCurrenciesComponent
  ],
  imports: [
    CommonModule,
    PopularCurrenciesRoutingModule,
    SelectModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    PopularCurrenciesComponent
  ]
})
export class PopularCurrenciesModule { }
