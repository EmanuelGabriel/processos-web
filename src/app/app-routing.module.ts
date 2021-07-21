import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./cliente/cliente.module').then(c => c.ClienteModule)
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
