import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule], // Importa FormsModule
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  onLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Aquí podrías enviar los datos al backend o realizar otra lógica
    console.log('Iniciando sesión con:', { email: this.email, password: this.password });
    alert('Inicio de sesión exitoso!');
  }
}


