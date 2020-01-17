import { Component, OnInit } from '@angular/core';
import { DatosFalsoService } from '../../services/datos-falso.service';
import { DatosFalsos } from 'src/app/interfaces/datos.interfas';

import { MatDialog } from '@angular/material';
import { PostDetailComponent } from '../post-detail/post-detail.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  datos: DatosFalsos[] = [];

  constructor(private datosFalsoService: DatosFalsoService,
              private modal: MatDialog) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.datosFalsoService.ObtenerDatos()
      .subscribe((datos: DatosFalsos[]) => this.datos = datos);
  }

  abrirModal(dato) {
    this.modal.open(PostDetailComponent, {
      width: '100%',
      height: '100%',
      data: {dato}
    });
  }

}
