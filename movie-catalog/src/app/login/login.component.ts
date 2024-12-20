import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  // Importa FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      alert('Inicio de sesión exitoso!');
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  }
}





