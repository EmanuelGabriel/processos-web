import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUploadArquivoComponent } from './listagem-upload-arquivo/listagem-upload-arquivo.component';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemUploadArquivoComponent
  },

  {
    path: 'novo',
    component: UploadArquivoComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
