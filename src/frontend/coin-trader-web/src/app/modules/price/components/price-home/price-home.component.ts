import { Component, OnInit, Output } from '@angular/core';
import { CoinTraderApiClient } from '@app/services/CoinTraderApiClientTS.service';

@Component({
  selector: 'app-price-home',
  templateUrl: './price-home.component.html',
  styleUrls: ['../../../../global.scss']
})
export class PriceHomeComponent implements OnInit {
  @Output() price?: number = 0;

   constructor(private apiClient: CoinTraderApiClient) { }

  ngOnInit(): void {
     this.apiClient.price().subscribe(data => {
       this.price = data?.ask?.valueOf()
     }, error => {
       console.log('Peter, some sort of error happened.' + error)
     });

  }

}
