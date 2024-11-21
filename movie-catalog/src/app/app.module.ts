import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importar AppComponent standalone

@NgModule({
  imports: [BrowserModule], // Aquí solo se añaden módulos necesarios
  providers: []
})
export class AppModule { }

// Bootstrap manual del componente standalone
bootstrapApplication(AppComponent, {
  providers: []
}).catch(err => console.error(err));


