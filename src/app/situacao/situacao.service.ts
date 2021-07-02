import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FileModelResponse } from './model/file-model-response';
import { Situacao } from './model/situacao';
import { SituacaoDTO } from './model/situacaoDTO';

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  url = `${environment.urlBASE}/situacao-processo`;

  urlBase = `${environment.baseURL}/upload`;

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  criar(situacao: Situacao): Observable<SituacaoDTO> {
    return this.http.post<SituacaoDTO>(`${this.url}`, situacao).pipe(take(1));
  }

  getAll(): Observable<SituacaoDTO> {
    return this.http.get<SituacaoDTO>(`${this.url}`, { headers: this.httpOptions.headers }).pipe(take(1));
  }

  getById(idDocumento: number): Observable<Situacao> {
    return this.http.get<Situacao>(`${this.url}`);
  }

  adicionarFile(file: File): Observable<FileModelResponse> {
    const frmData = new FormData();
    frmData.append('file', file);
    return this.http.post<FileModelResponse>(this.urlBase, file);
  }


}
