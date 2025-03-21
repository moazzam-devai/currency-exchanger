import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
