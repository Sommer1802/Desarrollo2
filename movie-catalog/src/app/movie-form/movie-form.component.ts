import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  standalone: true,
  imports: [FormsModule], // Asegúrate de incluir FormsModule aquí
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  movie = {
    title: '',
    description: '',
    releaseYear: '',
    director: '',
    actors: '',
    duration: '',
    rentPrice: '',
    buyPrice: '',
    rating: null,
    image: null
  };

  // Maneja la selección de archivo
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.movie.image = file;
      console.log('Archivo seleccionado:', file);
      alert('Archivo cargado: ' + file.name);
    }
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Formulario enviado:', this.movie);
    alert('Película guardada correctamente.');
  }

  // Método para cancelar la acción
  onCancel() {
    alert('Acción cancelada.');
  }
}




