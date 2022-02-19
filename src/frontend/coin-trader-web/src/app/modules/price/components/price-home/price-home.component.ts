import { Component, OnInit, Output } from '@angular/core';
import { BackendCommsService } from '@app/services/backend-comms.service';


@Component({
  selector: 'app-price-home',
  templateUrl: './price-home.component.html',
  styleUrls: ['../../../../global.scss']
})
export class PriceHomeComponent implements OnInit {
  @Output() price?: number = 0;
  askValue: number = 0;
  askChangePercentage: number = 0;

  constructor(private backendComms: BackendCommsService) { }

  ngOnInit(): void {

    this.backendComms.currentMessage.subscribe(data =>
      {
        this.askValue = data.askValue ?? 0;
        this.askChangePercentage = data.askChangePercentage ?? 0;
      });
  }



}
