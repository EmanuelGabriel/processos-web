import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Situacao } from '../model/situacao';
import { SituacaoService } from '../situacao.service';

@Component({
  selector: 'app-consultar-situacao',
  templateUrl: './consultar-situacao.component.html',
  styleUrls: ['./consultar-situacao.component.scss']
})
export class ConsultarSituacaoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nome_situacao', 'acoes'];
  situacoes: Situacao[] = [];

  dataSituacao = new MatTableDataSource<Situacao>(this.situacoes);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSituacao.paginator = this.paginator;
  }


  totalElementos = 0;
  pagina = 0;
  tamanho = 5;

  constructor(
    private situacaoService: SituacaoService,
    private titulo: Title,
    private router: Router) { }

  ngOnInit(): void {
    this.titulo.setTitle('Consultar Situação')

    this.getAll();
  }

  getAll() {
    this.situacaoService.getAll().subscribe(resposta => {
      this.dataSituacao = new MatTableDataSource<Situacao>(resposta);
      this.dataSituacao.paginator = this.paginator;
      this.dataSituacao.paginator._intl.itemsPerPageLabel = 'Exibir';
      this.dataSituacao.paginator._intl.nextPageLabel = 'Próxima página';
      this.dataSituacao.paginator._intl.previousPageLabel = 'Página anterior';
      // this.situacoes = resposta;
      console.log(resposta);
    });
  }

  editar(situacao: Situacao) {
    this.router.navigate(['situacao', situacao.id]);
    console.log(situacao.id);
  }

  remover(situacao: Situacao) {
    console.log(situacao);
  }


}
