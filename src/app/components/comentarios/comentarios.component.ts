import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosFalsoService } from '../../services/datos-falso.service';
import { Comentario } from '../../interfaces/comentario.interfas';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {


  @Input() Id: number;
  @Output() fecha: EventEmitter<Date> = new EventEmitter();
  comentarios = [];

  constructor(private datosService: DatosFalsoService) { }

  ngOnInit() {
    this.datosService.ObtenerComentario(this.Id)
      .subscribe((datos: Comentario[]) => this.comentarios = datos);
  }

  mostrarFechaHoy() {
    this.fecha.emit(new Date());
  }

}
