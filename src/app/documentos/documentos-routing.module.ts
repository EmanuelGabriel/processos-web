import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarDocumentoComponent } from './cadastrar-documento/cadastrar-documento.component';
import { ConsultarDocumentoComponent } from './consultar-documento/consultar-documento.component';
import { DetalharDocumentoComponent } from './detalhar-documento/detalhar-documento.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarDocumentoComponent
  },
  {
    path: 'novo',
    component: CadastrarDocumentoComponent
  },
  {
    path: 'detalhar',
    component: DetalharDocumentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
