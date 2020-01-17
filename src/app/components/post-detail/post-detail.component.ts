import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatosFalsoService } from '../../services/datos-falso.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  datos;
  newFecha: Date;

  constructor(public modalRef: MatDialogRef<PostDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    console.log(this.data);
    this.datos = this.data.dato;
  }

  mostrarFecha(event: Date) {
    this.newFecha = event;
  }
}
