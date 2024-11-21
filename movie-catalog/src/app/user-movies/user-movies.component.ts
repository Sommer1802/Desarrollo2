import { Component } from '@angular/core';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent {
  movies = [
    { id: 1, title: 'Movie 1', genre: 'Action', rentPrice: 5, buyPrice: 15, poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Movie 2', genre: 'Comedy', rentPrice: 4, buyPrice: 12, poster: 'https://via.placeholder.com/150' }
  ];

  onRentMovie(id: number) {
    console.log('Rent movie:', id);
  }

  onBuyMovie(id: number) {
    console.log('Buy movie:', id);
  }
}

