import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosFalsos } from '../interfaces/datos.interfas';

@Injectable({
  providedIn: 'root'
})
export class DatosFalsoService {

  Uri = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }


  ObtenerDatos() {
    const uri = `${this.Uri}/posts`;
    return this.http.get<DatosFalsos[]>(uri);
  }

  ObtenerComentario(id) {
    const uri = `${this.Uri}/comments?postId=${id}`;
    return this.http.get(uri);
  }
}
