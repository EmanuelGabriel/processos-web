import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Situacao } from '../model/situacao';
import { SituacaoDTO } from '../model/situacaoDTO';
import { SituacaoService } from '../situacao.service';

@Component({
  selector: 'app-cadastrar-situacao',
  templateUrl: './cadastrar-situacao.component.html',
  styleUrls: ['./cadastrar-situacao.component.scss']
})
export class CadastrarSituacaoComponent implements OnInit {

  frmSituacao: FormGroup;
  situacao: Situacao;
  situacaoDto: SituacaoDTO;

  constructor(private title: Title,
    private fb: FormBuilder,
    private situacaoService: SituacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.title.setTitle('Nova Situação');


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getById(parseInt(id, 0));
    }

    this.validarForm();
  }


  getById(id: number) {
    this.situacaoService.getById(id).subscribe(resp => {
      this.situacao = resp;
    });
  }


  get editando() {
    return Boolean(this.situacao.id);
  }


  validarForm() {
    this.frmSituacao = this.fb.group({
      descricao: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(90)]),
    });
  }


  onSubmit() {
    console.log(this.frmSituacao.value);
    this.situacaoService.criar(this.frmSituacao.value).subscribe(resp => {
      this.situacaoDto = resp;
      this.toastr.success('Situação adicionada com sucesso!')
      this.router.navigate(['/situacao']);
    });
  }

  limparForm(): void {
    this.frmSituacao.reset();
  }

}
