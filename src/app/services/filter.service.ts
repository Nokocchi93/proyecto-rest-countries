import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  nameSearch = new BehaviorSubject<string>('');
  majorRegionSelect = new BehaviorSubject<string>('');
}
