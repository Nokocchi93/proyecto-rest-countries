import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../model/country.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private restCountriesUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  fetchCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.restCountriesUrl}/all`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.restCountriesUrl}/all`);
  }

  getCountry(name: string): Observable<Country> {
    return this.http.get<Country>(`${this.restCountriesUrl}/name/${name}?fullText=true`);
  }

  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.restCountriesUrl}/alpha/${code}`);
  }
}
