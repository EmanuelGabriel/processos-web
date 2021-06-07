import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';


@NgModule({
  declarations: [
    ConsultarClienteComponent,
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NgxMaskModule.forRoot(),


  ]
})
export class ClienteModule { }
