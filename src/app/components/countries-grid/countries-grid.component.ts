import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/services/country.service';
import { FilterService } from 'src/app/services/filter.service';
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
      this.filterService.majorRegionSelect,
      this.filterService.orderSelect,
    ]).subscribe(([countries, name, majorRegion, order]) => {
      this.countries = countries
        .filter((c) => this.filterByName(c, name))
        .filter((c) => this.filterByMajorRegion(c, majorRegion))
        .sort((a, b) => this.sortCountries(a, b, order));
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

  filterByMajorRegion(country: Country, region: string): boolean {
    return region ? country.region === region : true;
  }

  sortCountries(a: Country, b: Country, order: string): number {
    if (order === 'AZ' || order === 'ZA') {
      return this.sortCustom(a.name.common, b.name.common, order);
    }

    if (order === 'LtG' || order === 'GtL') {
      return this.sortCustom(a.population, b.population, order);
    }
  }

  sortCustom(a: number | string, b: number | string, order: string): number {

    if (order === 'AZ' || order === 'LtG') {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }
    }

    if (order === 'ZA' || order === 'GtL') {
      if (a < b) {
        return 1;
      }

      if (a > b) {
        return -1;
      }
    }

    return 0;
  }

  ngOnDestroy(): void {
    this.filterService.nameSearch.next('');
    this.filterService.majorRegionSelect.next('');
    this.filterService.orderSelect.next('');
    this.subscription.unsubscribe();
  }
}
