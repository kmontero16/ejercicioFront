import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() informacion:any;

  rut: string ="";
  nombre: string ="";
  apellido: string = "";
  edad: number = 0;
  profesion: string = "";

  constructor() { }

  ngOnInit(): void {

  }
  guardar():void{
    console.log("guardar");
    this.informacion.push({
      rut:this.rut,
      nombre:this.nombre,
      apellido: this.apellido,
      edad:this.edad,
      profesion: this.profesion
    })
    
  }

}
