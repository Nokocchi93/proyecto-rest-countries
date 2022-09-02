import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../model/country.model';
import { CountryService } from '../services/country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country: Country;
  borderCountries: Country[] = [];

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.countryService.getCountry(params.name))
    ).subscribe(c => {
      this.setCountry(c);
    });
  }

  setCountry(c: Country): void {
    console.log(c);
    this.country = c;
    this.borderCountries = [];
    this.getBorderCountries();
  }

  getBorderCountries(): void {
    if (this.country[0].borders) {
      this.country[0].borders.forEach(c => {
        this.countryService.getCountryByCode(c.toLowerCase()).subscribe(c => {
          this.borderCountries.push(c[0]);
        });
      });
    }
  }
}
