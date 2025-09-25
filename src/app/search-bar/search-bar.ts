import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchResults } from '../search-results/search-results';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, SearchResults],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
   searchQuery: string = '';

}
