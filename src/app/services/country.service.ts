import { Injectable } from '@angular/core';
import { Country } from '../model/country.model';
import { COUNTRIES } from 'src/assets/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countries: Country[];

  constructor() {}

  // fetchCountries(): void {
  //   this.countries = COUNTRIES;
  // }

  getCountries(): Observable<Country[]> {
    // this.countries = COUNTRIES;
    // console.log(this.countries);
    // return [...this.countries];
    return of(COUNTRIES);
  }

  getCountry(name: string): Observable<Country> {
    const country = COUNTRIES.find(c => c.name.common === name);
    return of(country);
  }
}
