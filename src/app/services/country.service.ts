import { Injectable } from '@angular/core';
import { Country } from '../model/country.model';
import { COUNTRIES } from 'src/assets/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }
}
