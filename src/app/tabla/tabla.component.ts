import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() informacion:any;
  @Input() showForm:boolean;

  constructor() { }

  eliminar(rut) {
    const filteredLibraries = this.informacion.filter((item) => item.rut !== rut)
    this.informacion = filteredLibraries
  }

  ngOnInit(): void {

  }
}
