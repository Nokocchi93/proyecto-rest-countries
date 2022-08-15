import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesGridComponent } from './components/countries-grid/countries-grid.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: 'details/:name', component: CountryDetailsComponent },
  { path: '', component: CountriesGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
