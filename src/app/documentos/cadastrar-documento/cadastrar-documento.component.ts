import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoService } from '../documento.service';
import { Documento } from '../model/documento';


@Component({
  selector: 'app-cadastrar-documento',
  templateUrl: './cadastrar-documento.component.html',
  styleUrls: ['./cadastrar-documento.component.scss']
})
export class CadastrarDocumentoComponent implements OnInit {

  frm: FormGroup;
  documento: Documento;

  constructor(private fb: FormBuilder,
    private titulo: Title,
    private router: Router,
    private route: ActivatedRoute,
    private documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Novo Documento');

    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.getById(parseInt(codigo, 0));
    }

    this.validarFormulario();
  }

  get editando() {
    return Boolean(this.documento.id);
  }

  getById(id: number) {
    this.documentoService.getById(id).subscribe(resposta => {
      this.documento = resposta;
    });
  }

  validarFormulario() {
    this.frm = this.fb.group({
      id: new FormControl(''),
      nomeDocumento: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
      numeroProcesso: new FormControl('', [Validators.required]),
      dataCadastro: new FormControl('', [Validators.required]),
      dataEstimadaConclusao: new FormControl('', [Validators.required]),
      situacao: new FormControl('', [Validators.required]),

    });
  }


  limparForm(): void {
    this.frm.reset();
  }

}
