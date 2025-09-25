import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css'
})
export class SearchResults {
  @Input() searchQuery: string = '';


  articles = [
    { title: 'Chanel', 
      url: 'https://www.chanel.com', 
      description: 'Elegant and timeless handbags known for their quilted leather and classic style.' 
    },
    { title: 'Lacoste', 
      url: 'https://www.lacoste.com', 
      description: 'Casual yet stylish bags that combine sporty vibes with modern fashion.'
     },
    { title: 'Gucci', 
      url: 'https://www.gucci.com', 
      description: 'Luxury Italian brand famous for its bold designs and iconic GG logo bags.' 
    },
    { title: 'Dolce & Gabbana', 
      url: 'https://www.dolcegabbana.com', 
      description: 'Distinctive bags that mix Mediterranean style with glamorous flair.' 
    },
    { title: 'Hermès', 
      url: 'https://www.hermes.com', 
      description: 'Exclusive luxury handbags like the Birkin and Kelly, symbols of timeless elegance.' 
    },
    { title: 'Dior', 
      url: 'https://www.dior.com', 
      description: 'Iconic bags such as the Lady Dior, blending sophistication with modernity.' 
    },
    { title: 'Prada', 
      url: 'https://www.prada.com', 
      description: 'Italian luxury brand with sleek, minimalist, and high-fashion handbag designs.' 
    },
    
    { title: 'Saint Laurent', 
      url: 'https://www.ysl.com', 
      description: 'Parisian chic handbags with edgy yet elegant style, including the iconic YSL logo.'
     }
  ];

  get filteredArticles() {
    return this.articles.filter(a =>
      a.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}


