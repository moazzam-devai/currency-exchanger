import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectModule } from './shared/components/select/select.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api-interceptors';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import {  } from './features/currency-converter/component/currency-converter.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    ChartModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
