import { Component, OnInit, Input } from '@angular/core';
import { CoinType } from '@app/services/CoinTraderApiClientTS.service';

@Component({
  selector: 'app-ask-value-display',
  templateUrl: './ask-value-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskValueDisplayComponent implements OnInit {
  @Input() askValue: number | undefined = undefined;
  @Input() showTitle : boolean = true;
  @Input() coinType : CoinType = CoinType.BTC;

  constructor() { }

  ngOnInit(): void {
  }

}
