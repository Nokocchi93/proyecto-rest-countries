import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './model/country.model';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proyecto-rest-countries';
  countries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.fetchCountries();
  }
}
