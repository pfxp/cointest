import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ask-change-display',
  templateUrl: './ask-change-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskChangeDisplayComponent implements OnInit {
  @Input() askChangePercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
