import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SituacaoRoutingModule } from './situacao-routing.module';
import { ConsultarSituacaoComponent } from './consultar-situacao/consultar-situacao.component';
import { CadastrarSituacaoComponent } from './cadastrar-situacao/cadastrar-situacao.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConsultarSituacaoComponent,
    CadastrarSituacaoComponent
  ],
  imports: [
    CommonModule,
    SituacaoRoutingModule,


    MatInputModule,
    MatButtonModule,
  ]
})
export class SituacaoModule { }
