import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IspModule } from './modules/isp/isp.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IspModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
