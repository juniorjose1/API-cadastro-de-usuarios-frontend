import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { CadastrarComponent } from './Pessoa/cadastrar/cadastrar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';
import { PesquisarComponent } from './Pessoa/pesquisar/pesquisar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'editar', component:EditarComponent},
  {path:'pesquisar', component:PesquisarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
