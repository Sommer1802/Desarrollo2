import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  movies = [
    { id: 1, title: 'Movie 1', genre: 'Action', releaseYear: 2022, poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Movie 2', genre: 'Comedy', releaseYear: 2023, poster: 'https://via.placeholder.com/150' }
  ];

  constructor(private router: Router) {}

  onAddMovie() {
    this.router.navigate(['/add-movie']);
  }

  onEditMovie(id: number) {
    this.router.navigate([`/edit-movie/${id}`]);
  }

  onDeleteMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}

