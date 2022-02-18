import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-choice',
  templateUrl: './coin-choice.component.html',
  styleUrls: ['../../../../global.scss']
})
export class CoinChoiceComponent implements OnInit {
  @Input() preferredCoinType = "BTC";

  constructor() { }

  ngOnInit(): void {
  }

}
