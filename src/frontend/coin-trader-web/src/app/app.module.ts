import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_BASE_URL, CoinTraderApiClient } from './services/CoinTraderApiClientTS.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
