import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PopularCurrenciesComponent } from './component/popular-currencies.component';

const routes: Routes = [
    {
        path: '',
        component: PopularCurrenciesComponent
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PopularCurrenciesRoutingModule {}
