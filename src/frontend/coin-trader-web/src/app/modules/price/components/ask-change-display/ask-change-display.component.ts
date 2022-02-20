import { Component, OnInit, Input } from '@angular/core';
import { CoinType } from '@app/services/CoinTraderApiClientTS.service';

@Component({
  selector: 'app-ask-change-display',
  templateUrl: './ask-change-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskChangeDisplayComponent implements OnInit {
  @Input() askChangePercentage: number = 0;
  @Input() showTitle : boolean = true;
  @Input() coinType : CoinType = CoinType.BTC;

  constructor() { }

  ngOnInit(): void {
  }

}
