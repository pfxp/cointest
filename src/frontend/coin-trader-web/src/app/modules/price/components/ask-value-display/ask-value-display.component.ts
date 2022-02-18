import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ask-value-display',
  templateUrl: './ask-value-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskValueDisplayComponent implements OnInit {
  @Input() askValue: number = 54321.1234567;

  constructor() { }

  ngOnInit(): void {
  }

}
