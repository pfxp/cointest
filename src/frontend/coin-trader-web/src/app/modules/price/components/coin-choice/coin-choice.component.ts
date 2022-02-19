import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CoinType } from '@app/services/CoinTraderApiClientTS.service';


@Component({
  selector: 'app-coin-choice',
  templateUrl: './coin-choice.component.html',
  styleUrls: ['../../../../global.scss']
})
export class CoinChoiceComponent implements OnInit {
  @Input() preferredCoinType = "BTC";
  @Output() coinTypeChanged = new EventEmitter<CoinType>();

  constructor() { }

  ngOnInit(): void {
  }

  coinChanged(val: MatButtonToggleChange): void {
    const typedCoinValue : CoinType = val.value as CoinType;

    console.log(`Changed coin value to ${val.value} in coin-choice component. Typed coin ${typedCoinValue}`);

    this.coinTypeChanged.emit(typedCoinValue);
  }

}
