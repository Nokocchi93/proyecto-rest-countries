import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { MajorRegions } from '../model/country.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  majorRegions = [
    MajorRegions.Africa,
    MajorRegions.Americas,
    MajorRegions.Asia,
    MajorRegions.Europe,
    MajorRegions.Oceania,
  ];
  searchInput = new FormControl('');
  majorRegionsSelect = new FormControl('');
  orderSelect = new FormControl('');
  searchInputSub: Subscription;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value) =>
      this.filterService.nameSearch.next(value)
    );

    this.majorRegionsSelect.valueChanges.subscribe((value) =>
      this.filterService.majorRegionSelect.next(value)
    );

    this.orderSelect.valueChanges.subscribe((value) =>
      this.filterService.orderSelect.next(value)
    );
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
