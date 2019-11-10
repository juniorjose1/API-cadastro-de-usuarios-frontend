import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [ConfirmationService]
})
export class ListarComponent implements OnInit {

  msgs: any;

  pessoas: Pessoa[];
  constructor(private confirmationService: ConfirmationService, private service: ServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getPessoas()
      .subscribe(data => {
        this.pessoas = data;
      })
  }

  Editar(pessoa: Pessoa): void {
    localStorage.setItem("id", pessoa.id.toString());
    this.router.navigate(["editar"]);
  }

  Deletar(pessoa: Pessoa) {
    this.service.deletarPessoas(pessoa)
      .subscribe(data => {
        this.pessoas = this.pessoas.filter(p => p !== pessoa);
        this.toastr.success(pessoa.nome + ' foi Excluído(a) com Sucesso !');
      })
  }

  confirmacaoDeletarTudo() {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja apagar todos os convidados?',
        header: 'Confirmação de Exclusão',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
            this.service.deletarTudo().subscribe(data => {this.pessoas = data});
            this.msgs = [{severity:'success', summary:'Todos os convidados', detail:'foram excluídos com sucesso !'}];
        }
    });
}
  

}
