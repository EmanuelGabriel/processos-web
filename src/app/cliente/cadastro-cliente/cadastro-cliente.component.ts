import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  isLinear = false;
  primeiroFormGroup: FormGroup;
  segundoFormGroup: FormGroup;
  terceiroFormGroup: FormGroup;

  
  constructor(private titulo: Title,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.titulo.setTitle('Novo cliente');

    this.primeiroFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required]
    });

    this.segundoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.terceiroFormGroup = this._formBuilder.group({
      
    });


  }



}
