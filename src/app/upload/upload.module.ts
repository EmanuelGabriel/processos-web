import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';
import { ListagemUploadArquivoComponent } from './listagem-upload-arquivo/listagem-upload-arquivo.component';


@NgModule({
  declarations: [
    UploadArquivoComponent,
    ListagemUploadArquivoComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
