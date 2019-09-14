import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  pessoas: Pessoa[];
  nome: string;
  idade: number;
  constructor(private serviceService: ServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.PesquisarPessoasNome();
  }

  PesquisarPessoasNome() {
    this.serviceService.pesquisarNome({ nome: this.nome })
      .then(pessoas => this.pessoas = pessoas);
  }

  PesquisarPessoasIdade() {
    this.serviceService.pesquisarIdade({ idade: this.idade })
      .then(pessoas => this.pessoas = pessoas);
  }

  Editar(pessoa: Pessoa): void {
    localStorage.setItem("id", pessoa.id.toString());
    this.router.navigate(["editar"]);
  }

  Deletar(pessoa: Pessoa) {
    this.serviceService.deletarPessoas(pessoa)
      .subscribe(data => {
        this.pessoas = this.pessoas.filter(p => p !== pessoa);
        this.toastr.success(pessoa.nome + ' Excluído(a) Com Sucesso !');
      })
  }

}
