import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DocumentoService } from '../documento.service';
import { Documento } from '../model/documento';


@Component({
  selector: 'app-consultar-documento',
  templateUrl: './consultar-documento.component.html',
  styleUrls: ['./consultar-documento.component.scss']
})
export class ConsultarDocumentoComponent implements OnInit {

  documentos: Documento[] = [];

  totalElementos = 0;
  pagina = 0;
  tamanho = 5;
  // loading: boolean;

  constructor(private documentoService: DocumentoService,
    private titulo: Title,
    private router: Router) { }

  ngOnInit(): void {
    this.titulo.setTitle('Consultar Documentos');

    this.getAll();
  }



  getAll() {
    this.documentoService.getAll().subscribe(resposta => {
      this.documentos = resposta.content;
      this.totalElementos = resposta.totalElements;
      this.pagina = resposta.number;
      console.log(resposta);
    });
  }


  detalhar(documento: Documento) {
    console.log(documento);
  }

  editar(documento: Documento) {
    this.router.navigate(['documentos', documento.id]);
    console.log(documento.id);
  }

  remover(documento: Documento) {
    console.log(documento);
  }


}
