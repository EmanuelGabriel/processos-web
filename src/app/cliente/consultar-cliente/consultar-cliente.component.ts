import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';
import { FiltroCliente } from '../model/filtro-cliente';


interface Filtro {
  column: string;
  value: any;
}

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit, AfterViewInit {

  colunas: string[] = ['id', 'nome', 'email', 'cpf', 'contato', 'data_cadastro', 'acoes'];
  clientes: Cliente[] = [];
  filtroCliente = new FiltroCliente();
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  TextoNaoHaRegistro = 'Nenhum registro para visualizar';

  clienteBusca: string;
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;
  value: string;
  prazo: string;
  pageSize: any = 20;
  page: any = 1;


  constructor(private clienteService: ClienteService,
    private titulo: Title,
    private spinner: NgxSpinnerService) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.titulo.setTitle('Pesquisar cliente');

    this.getAll();
  }


  getAll() {
    this.spinner.show();
    this.clienteService.getAll().subscribe(resp => {
      this.dataSource = new MatTableDataSource<Cliente>(resp.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator._intl.itemsPerPageLabel = 'Exibir';

    }, err => {
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    }, () => {
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    });
  }

  editar(cliente: Cliente) {
    console.log(cliente)
  }

  remover(cliente: Cliente) {
    console.log(cliente);
  }

  /**
 * Filtro geral de busca de documentos por seus campos na Triagem
 */
  filtro() {
    this.procura();
  }

  procura() {
      this.clienteService.getAll().subscribe(dados => {
         if(this.value){
           dados.content = dados.content.filter(coluna => {
            return coluna.nome.trim().toLocaleLowerCase().indexOf(this.value.trim().toLocaleLowerCase()) >= 0
           });
         }
         this.clientes = dados.content;
         console.log(dados);
      });

  }

}
  