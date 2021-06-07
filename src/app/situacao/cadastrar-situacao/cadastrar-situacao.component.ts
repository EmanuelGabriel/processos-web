import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Situacao } from '../model/situacao';
import { SituacaoDTO } from '../model/situacaoDTO';
import { SituacaoService } from '../situacao.service';

@Component({
  selector: 'app-cadastrar-situacao',
  templateUrl: './cadastrar-situacao.component.html',
  styleUrls: ['./cadastrar-situacao.component.scss']
})
export class CadastrarSituacaoComponent implements OnInit {

  frm: FormGroup;
  situacao: Situacao;
  situacaoDto: SituacaoDTO;

  constructor(private title: Title,
    private fb: FormBuilder,
    private situacaoService: SituacaoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Nova Situação');


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getById(parseInt(id, 0));
    }
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
    this.frm = this.fb.group({
      id: new FormControl(''),
      descricao: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    });
  }


  onSubmit() {
    console.log('criar situação');
    this.situacaoService.criar(this.situacao).subscribe(resp => {
      this.situacaoDto = resp;
      this.router.navigate(['/situacao']);
    });
  }

  limparForm(): void {
    this.frm.reset();
  }

}
