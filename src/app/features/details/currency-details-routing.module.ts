import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CurrencyDetailsComponent } from './component/currency-details.component';

const routes: Routes = [
    {
        path: '',
        component: CurrencyDetailsComponent
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CurrencyDetailsRoutingModule {}
