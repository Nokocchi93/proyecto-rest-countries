import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesGridComponent } from './components/countries-grid/countries-grid.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  declarations: [AppComponent, CountryCardComponent, CountriesGridComponent, CountryDetailsComponent, SearchFiltersComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
