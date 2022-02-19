import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL, CoinTraderApiClient } from './services/CoinTraderApiClientTS.service';
import { BackendCommsService } from './services/backend-comms.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CoinTraderApiClient,
    {
      provide: API_BASE_URL,
      useValue: environment.API_URL
    },
    BackendCommsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
