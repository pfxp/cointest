import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ask-value-display',
  templateUrl: './ask-value-display.component.html',
  styleUrls: ['../../../../global.scss']
})
export class AskValueDisplayComponent implements OnInit {
  @Input() askValue: number | undefined = undefined;
  @Input() showTitle : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
