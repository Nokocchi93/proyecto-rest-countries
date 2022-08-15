import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../model/country.model';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country: Country | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name).subscribe(country => this.country = country);
    console.log(this.country);
  }

  goBack(): void {
    this.location.back();
  }

}
