import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ConsultarClienteComponent,
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NgxSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    NgxMaskModule.forRoot(),


    BrowserModule,
    MatInputModule,
  ]
})
export class ClienteModule { }
