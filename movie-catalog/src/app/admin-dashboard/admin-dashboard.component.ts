import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Importa AuthService para manejar la autenticación

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  movies = [
    { id: 1, title: 'Movie 1', genre: 'Action', releaseYear: 2022, poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Movie 2', genre: 'Comedy', releaseYear: 2023, poster: 'https://via.placeholder.com/150' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  onAddMovie() {
    this.router.navigate(['/add-movie']);
  }

  onEditMovie(id: number) {
    this.router.navigate([`/edit-movie/${id}`]);
  }

  onDeleteMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  // Método para cerrar sesión
  onLogout() {
    this.authService.logout(); // Elimina el token de autenticación
    this.router.navigate(['/login']); // Redirige al formulario de login
  }
}
