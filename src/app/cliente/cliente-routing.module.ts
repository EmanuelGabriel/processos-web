import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarClienteComponent
  },
  {
    path: 'novo',
    component: CadastroClienteComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
