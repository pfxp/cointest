import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceHomeComponent } from './components/price-home/price-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PriceHomeComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
