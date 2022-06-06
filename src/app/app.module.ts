import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesGridComponent } from './components/countries-grid/countries-grid.component';

@NgModule({
  declarations: [AppComponent, CountryCardComponent, CountriesGridComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
