import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Situacao } from '../model/situacao';
import { SituacaoService } from '../situacao.service';

@Component({
  selector: 'app-consultar-situacao',
  templateUrl: './consultar-situacao.component.html',
  styleUrls: ['./consultar-situacao.component.scss']
})
export class ConsultarSituacaoComponent implements OnInit {

  situacoes: Situacao[] = [];


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
      this.situacoes = resposta;
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
