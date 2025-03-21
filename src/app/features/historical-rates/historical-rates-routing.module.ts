import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HistoricalRatesComponent } from './component/historical-rates.component';

const routes: Routes = [
    {
        path: '',
        component: HistoricalRatesComponent
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HistoricalRatesRoutingModule {}
