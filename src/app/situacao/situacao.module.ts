import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { SituacaoRoutingModule } from './situacao-routing.module';
import { ConsultarSituacaoComponent } from './consultar-situacao/consultar-situacao.component';
import { CadastrarSituacaoComponent } from './cadastrar-situacao/cadastrar-situacao.component';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    ConsultarSituacaoComponent,
    CadastrarSituacaoComponent
  ],
  imports: [
    CommonModule,
    SituacaoRoutingModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ]
})
export class SituacaoModule { }
