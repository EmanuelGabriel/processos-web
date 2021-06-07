import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Documento } from './model/documento';
import { DocumentoDto } from './model/documento-dto';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  url = `${environment.urlBASE}/documentos`;

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAll(): Observable<DocumentoDto> {
    return this.http.get<DocumentoDto>(`${this.url}`, { headers: this.httpOptions.headers }).pipe(take(1));
  }

  getById(idDocumento: number): Observable<Documento> {
    return this.http.get<Documento>(`${this.url}`);
  }

}
