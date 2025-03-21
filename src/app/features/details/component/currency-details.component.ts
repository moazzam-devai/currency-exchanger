import { Component, OnDestroy, OnInit } from '@angular/core';
import { LatestCurrencyQuery } from 'src/app/interfaces/currency-conversion.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit,OnDestroy {
  sharedData!: LatestCurrencyQuery; 
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.commonService.data$.subscribe((data) => {
      this.sharedData = data;
    });
  }

  ngOnDestroy(): void {
    
  }
}
