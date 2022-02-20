import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/price', pathMatch: 'full' },
  { path: '**', redirectTo: '/price', pathMatch: 'full' },
  { path: 'price', loadChildren: () => import('./modules/price/price.module').then(m => m.PriceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
