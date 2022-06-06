import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proyecto-rest-countries';
  search = new FormControl('');

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value) =>
      this.filterService.nameSearch.next(value)
    );
  }
}
