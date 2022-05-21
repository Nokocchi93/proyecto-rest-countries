import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.scss'],
})
export class CountriesGridComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }
}
