import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor() {}

  ngOnInit(): void {}
}
