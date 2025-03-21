import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultCurrencyConverionPair } from 'src/app/shared/enums/currency.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  defaultCurrencyConverionPair = DefaultCurrencyConverionPair;
constructor(private router: Router){

}
redirect(isToUSD:boolean){
  if(isToUSD){
    this.router.navigate(['/details', DefaultCurrencyConverionPair.EURGBP]);
  } else {
    this.router.navigate(['/details', DefaultCurrencyConverionPair.EURUSD]);
  }
  
}
}
