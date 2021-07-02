import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UploadArquivo } from './model/upload-arquivo';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadService {


  urlBase = `${environment.baseURL}/upload`;


  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAll(): Observable<UploadArquivo[]> {
    return this.http.get<UploadArquivo[]>(`${this.urlBase}`).pipe(take(1));
  }

  getById(id: number): Observable<UploadArquivo> {
    console.log(`${this.urlBase}/${id}`);
    return this.http.get<UploadArquivo>(`${this.urlBase}/${id}`).pipe(take(1));
  }

}
