import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Cliente } from './model/cliente';
import { FiltroCliente } from './model/filtro-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = `${environment.baseURL}/clientes`;

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAll(): Observable<FiltroCliente> {
    return this.http.get<FiltroCliente>(`${this.url}`, { headers: this.httpOptions.headers }).pipe(take(1));
  }

  getByID(idCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${idCliente}`).pipe(take(1));
  }


  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}`, cliente).pipe(take(1));
  }

}
