import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 	MdCardModule, 
					MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	MdButtonModule,
  	BrowserAnimationsModule,
  	MdCardModule,
    BrowserModule,
  	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcavO4Wf59cE1oyey7YkTnsSLGolOyNoI'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
