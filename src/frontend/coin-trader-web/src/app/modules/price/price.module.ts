import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinChoiceComponent } from './components/coin-choice/coin-choice.component';
import { PriceRoutingModule } from './price-routing.module';
import { PriceHomeComponent } from './components/price-home/price-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AskValueDisplayComponent } from './components/ask-value-display/ask-value-display.component';
import { AskChangeDisplayComponent } from './components/ask-change-display/ask-change-display.component';

@NgModule({
  declarations: [
    CoinChoiceComponent,
    PriceHomeComponent,
    PageNotFoundComponent,
    AskValueDisplayComponent,
    AskChangeDisplayComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    MatButtonToggleModule
  ]
})
export class PriceModule { }
