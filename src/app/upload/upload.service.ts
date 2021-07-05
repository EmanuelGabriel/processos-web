import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UploadArquivo } from './model/upload-arquivo';
import { catchError } from 'rxjs/operators';
import { ImageModel } from './model/image-model';


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

  adicionar(file: File): Observable<UploadArquivo> {
    const frmData = new FormData();
    frmData.append('file', file);
    return this.http.post<UploadArquivo>(`${this.urlBase}`, frmData).pipe(catchError(this.handleError.bind(this)));
  }

  getAll(): Observable<UploadArquivo[]> {
    return this.http.get<UploadArquivo[]>(`${this.urlBase}`).pipe(catchError(this.handleError.bind(this)));
  }

  getById(id: number): Observable<UploadArquivo> {
    console.log(`${this.urlBase}/${id}`);
    return this.http.get<UploadArquivo>(`${this.urlBase}/${id}`).pipe(catchError(this.handleError.bind(this)));
  }

  protected handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
