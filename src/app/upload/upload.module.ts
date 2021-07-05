import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';
import { ListagemUploadArquivoComponent } from './listagem-upload-arquivo/listagem-upload-arquivo.component';
import { FormsModule } from '@angular/forms';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    UploadArquivoComponent,
    ListagemUploadArquivoComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    FormsModule,
    NgxSpinnerModule,

  ]
})
export class UploadModule { }
