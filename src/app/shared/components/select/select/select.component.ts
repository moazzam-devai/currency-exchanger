import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencySymbol, SymbolsApiResponse } from 'src/app/interfaces/currency-conversion.interface';
import { CurrencyConversionService } from 'src/app/services/currency-conversion.service';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit  {

  form!: FormGroup;
 // @Input() options: CurrencySymbol = {};
  @Input() selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  //symbols:CurrencySymbol = {};
  private _options: CurrencySymbol = {};

  @Input()
  set options(value: CurrencySymbol) {
    this._options = value;
  }

  get options(): CurrencySymbol {
    return this._options;
  }

  
  constructor(private currencyConversionService:CurrencyConversionService){

  }
  ngOnInit(): void {
  }
  onOptionSelected(option: any): void {
    const selectedValue: string = option.target.value;
    this.selectedOption = selectedValue;
    this.optionSelected.emit(this.selectedOption);
  }
}
