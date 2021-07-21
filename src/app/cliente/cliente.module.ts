import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CpfPipePipe } from './pipes/cpf-pipe.pipe';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ConsultarClienteComponent,
    CadastroClienteComponent,
    CpfPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    NgxSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    NgxMaskModule.forRoot(),


    MatInputModule,
    MatStepperModule,
  ]
})
export class ClienteModule { }
