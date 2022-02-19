import { BehaviorSubject, throwIfEmpty } from 'rxjs';
import { Injectable } from '@angular/core';
import { CoinPriceData, CoinTraderApiClient, CoinType } from './CoinTraderApiClientTS.service';
import { AskPriceInfo } from '@app/interfaces'
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendCommsService {
  currentAskPrice: number | undefined = undefined;
  askChangePercentage: number | undefined = undefined;

  private messageSource = new BehaviorSubject<AskPriceInfo>({ askValue: undefined, askChangePercentage: undefined });
  currentMessage = this.messageSource.asObservable();

  constructor(private coinTraderApiClient: CoinTraderApiClient) {

    const timerSource = timer(0, 1000);
    const subscribe = timerSource.subscribe(
      data => {
        this.getAskPrice();
      });
  }

  setCoinType(coinType: CoinType): void {
    console.log(`Setting coin type to ${coinType} on backend.`);
    const subscription = this.coinTraderApiClient.preferredCoin(coinType).subscribe(
      data => {
        this.currentAskPrice = undefined;
        this.askChangePercentage = undefined;
        console.log(`Reset the ask and ask change.`);
      }
    );
  }

  getAskPrice(): void {

    let newAskPrice: number | undefined = undefined;

    this.coinTraderApiClient.price().subscribe(
      data => {
        newAskPrice = data.ask;

        if (newAskPrice === undefined) {
          this.messageSource.next({ askValue: undefined, askChangePercentage: undefined });
        }
        else {
          if (this.currentAskPrice === undefined) {
            // This is our first pricing data
            this.currentAskPrice = newAskPrice;
            this.messageSource.next({ askValue: newAskPrice, askChangePercentage: undefined });
          }
          else if (newAskPrice != this.currentAskPrice) {
            let priceDifference = newAskPrice - this.currentAskPrice;
            let percentDiff = priceDifference / this.currentAskPrice;
            this.currentAskPrice = newAskPrice;
            this.messageSource.next({ askValue: newAskPrice, askChangePercentage: percentDiff });
          }
        }
      },
      error => {
        // We want the price display components to know there is no data so instead of keeping the last value
        // displayed they should really display some sort of error.
        this.messageSource.next({ askValue: undefined, askChangePercentage: undefined });
        console.error(error);
      });
  }
}
