import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ask-change-display',
  templateUrl: './ask-change-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskChangeDisplayComponent implements OnInit {
  @Input() askChange: number = 1.1234567;

  constructor() { }

  ngOnInit(): void {
  }

}
