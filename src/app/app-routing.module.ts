import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'processos',
    loadChildren: () => import('./processo/processo.module').then(p => p.ProcessoModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./documentos/documentos.module').then(d => d.DocumentosModule)
  },
  {
    path: 'situacao',
    loadChildren: () => import('./situacao/situacao.module').then(s => s.SituacaoModule)
  },
  {
    path: 'arquivos',
    loadChildren: () => import('./upload/upload.module').then(a => a.UploadModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
