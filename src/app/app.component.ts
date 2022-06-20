import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio-app';

  showForm = false;
  toggleForm(){
    this.showForm = !this.showForm;
  }
  
  informacion = [
    {
      rut: '11111111-1',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      profesion: 'Ingeniero'
    },
    {
      rut: '2222222-2',
      nombre: 'Pedro',
      apellido: 'Perez',
      edad: 20,
      profesion: 'Ingeniero'
    },
    {
      rut: '3333333-3',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      profesion: 'Ingeniero'
    },
    {
      rut: '4444444-4',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      profesion: 'Ingeniero'
    },
    {
      rut: '5555555-5',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      profesion: 'Ingeniero'
    }
  ]

}
