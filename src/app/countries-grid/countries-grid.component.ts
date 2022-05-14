import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/assets/mock-data';

@Component({
  selector: 'app-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.scss'],
})
export class CountriesGridComponent implements OnInit {
  countries = COUNTRIES;

  constructor() {}

  ngOnInit(): void {}
}
