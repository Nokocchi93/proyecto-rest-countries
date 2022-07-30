import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FilterService } from './services/filter.service';

import { MajorRegions } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proyecto-rest-countries';
  majorRegions = [
    MajorRegions.Africa,
    MajorRegions.Americas,
    MajorRegions.Asia,
    MajorRegions.Europe,
    MajorRegions.Oceania,
  ];
  searchInput = new FormControl('');
  majorRegionsSelect = new FormControl('');

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value) =>
      this.filterService.nameSearch.next(value)
    );

    this.majorRegionsSelect.valueChanges.subscribe((value) =>
      this.filterService.majorRegionSelect.next(value)
    );
  }
}
