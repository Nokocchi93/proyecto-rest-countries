import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/services/country.service';
import { FilterService } from 'src/app/services/filter.service';
import { filter } from 'rxjs/operators';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.scss'],
})
export class CountriesGridComponent implements OnInit, OnDestroy {
  countries: Country[];
  subscription: Subscription;

  constructor(
    private countryService: CountryService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.countryService.getCountries(),
      this.filterService.nameSearch,
    ]).subscribe(([countries, name]) => {
      this.countries = countries.filter((c) => this.filterByName(c, name));
    });
  }

  // This method filters by country or by capital name
  filterByName(country: Country, name: string): boolean {
    // return (
    //   country.name.common.toLowerCase().includes(name.toLowerCase()) ||
    //   country.capital[0].toLowerCase().includes(name.toLowerCase())
    // );
    return country.name.common.toLowerCase().includes(name.toLowerCase());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
