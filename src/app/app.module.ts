import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { CadastrarComponent } from './Pessoa/cadastrar/cadastrar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PesquisarComponent } from './Pessoa/pesquisar/pesquisar.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { VerificarSegurancaComponent } from './Pessoa/verificar-seguranca/verificar-seguranca.component';

const routes: Routes = [

  { path: '', redirectTo: '/listar', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    EditarComponent,
    PesquisarComponent,
    VerificarSegurancaComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      confirmText: '<i class="fas fa-user-times"></i> Apagar',
      cancelText: 'Cancelar',
      popoverTitle: 'Deletar Pessoa',
      popoverMessage: 'Tem certeza de que deseja excluir a pessoa selecionada?'
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
