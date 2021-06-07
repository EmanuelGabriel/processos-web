import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarSituacaoComponent } from './cadastrar-situacao/cadastrar-situacao.component';
import { ConsultarSituacaoComponent } from './consultar-situacao/consultar-situacao.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarSituacaoComponent
  },
  {
    path: 'novo',
    component: CadastrarSituacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SituacaoRoutingModule { }
