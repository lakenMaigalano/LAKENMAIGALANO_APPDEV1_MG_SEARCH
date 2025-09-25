import { Routes } from '@angular/router';
import { SearchBar} from './search-bar/search-bar';

export const routes: Routes = [
  { path: 'search', component: SearchBar },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];
