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

  id: any;
  editar: any;

  constructor(private title: Title,
    private fb: FormBuilder,
    private situacaoService: SituacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.title.setTitle('Nova Situação');

    this.route.params.subscribe(resp => {
      this.id = resp.id;
      if (resp.editar) {
        this.editar = resp.editar === 'true';
      }
    });


    if(this.id){
       this.situacaoService.getById(this.id).subscribe(resp => {
          this.frmSituacao.patchValue({
             id: resp.id,
             descricao: resp.descricao 
          });
       });

       this.title.setTitle('Editar Situação');
       if(!this.editar){
         this.frmSituacao.disable();
       }

    }else{
        console.log('faça algo');
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
