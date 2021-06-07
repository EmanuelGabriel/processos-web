import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { ConsultarDocumentoComponent } from './consultar-documento/consultar-documento.component';
import { CadastrarDocumentoComponent } from './cadastrar-documento/cadastrar-documento.component';
import { DetalharDocumentoComponent } from './detalhar-documento/detalhar-documento.component';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ConsultarDocumentoComponent,
    CadastrarDocumentoComponent,
    DetalharDocumentoComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,


    MatInputModule,
  ]
})
export class DocumentosModule { }
