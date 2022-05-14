import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountriesGridComponent } from './countries-grid/countries-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    CountriesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
