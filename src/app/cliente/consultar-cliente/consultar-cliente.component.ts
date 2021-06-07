import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,
    private titulo: Title) { }

  ngOnInit(): void {
    this.titulo.setTitle('Pesquisar cliente');

    this.getAll();
  }


  getAll() {
    this.clienteService.getAll().subscribe(resp => {
      this.clientes = resp;
    });
  }

  editar(cliente: Cliente) {
    console.log(cliente)
  }

  remover(cliente: Cliente) {
    console.log(cliente);
  }



}
