import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],  // Importa FormsModule aquí
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Lógica de registro
    console.log('Registrando usuario con:', { email: this.email, password: this.password });
    alert('Registro exitoso! Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }
}



