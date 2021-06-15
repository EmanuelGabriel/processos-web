import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Consultar Situação')

    this.getAll();
  }

  getAll() {
    this.situacaoService.getAll().subscribe(resposta => {
      //this.dataSituacao = new MatTableDataSource<SituacaoDTO>(resposta);
      //this.dataSituacao.paginator = this.paginator;
      //this.dataSituacao.paginator._intl.itemsPerPageLabel = 'Exibir';
      //this.dataSituacao.paginator._intl.nextPageLabel = 'Próxima página';
      //this.dataSituacao.paginator._intl.previousPageLabel = 'Página anterior';
      // this.dataSituacao = new MatTableDataSource<SituacaoDTO>(resposta.con);
      this.spinner.show();
      this.situacoes = resposta.content;
      this.totalElementos = resposta.totalElements;
      this.pagina = resposta.number;
      console.log(resposta);
    }, err => {
      this.spinner.hide();
    },
      () => {
        this.spinner.hide();
      });
  }

  editar(situacao: Situacao) {
    this.router.navigate(['situacao', situacao.id]);
    console.log(situacao.id);
  }

  remover(situacao: Situacao) {
    console.log(situacao);
  }

  abrirDialogoInformacoesDemanda(situacao: Situacao) {
    const modalRefInformacoesDemandas = this.modalService.open(ConsultarSituacaoComponent);
    modalRefInformacoesDemandas.componentInstance.demanda = situacao;
  }

}
