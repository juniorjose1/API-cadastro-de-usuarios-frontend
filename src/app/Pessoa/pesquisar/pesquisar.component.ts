import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

class Genero{
  constructor(public nome: string) { }
}

class Idade{
  constructor(public nome: string) { }
}

class Grupo{
  constructor(public nome: string) { }
}

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  pessoas: Pessoa[];
  nome: string;
  idade: string;
  sexo: string;
  grupo: string;
  tudo: string;

  genero = ['Homem', 'Mulher']
  sexoSelecionado: Genero = new Genero('');

  faixaEtaria = ['Adulto', 'Criança/Adolescente', 'Bebê']
  idadeSelecionada: Idade = new Idade('');

  grupoCasamento = ['Amigos do Noivo', 'Família do Noivo', 'Amigos da Noiva', 'Família da Noiva', 'Amigos em Comum']
  grupoSelecionado: Grupo = new Grupo('');

  constructor(private serviceService: ServiceService, private router: Router, private toastr: ToastrService) {  }

  ngOnInit() {
    this.PesquisarPessoasNome();
  }

  PesquisarPessoasNome() {
    this.serviceService.pesquisarNome({ nome: this.nome })
      .then(pessoas => this.pessoas = pessoas);
  }

  PesquisarPessoasIdade() {
    this.serviceService.pesquisarIdade({ idade: this.idadeSelecionada.nome })
      .then(pessoas => this.pessoas = pessoas);
  }

  PesquisarPessoasSexo() {
    this.serviceService.pesquisarSexo({ sexo: this.sexoSelecionado.nome })
      .then(pessoas => this.pessoas = pessoas);
  }

  PesquisarPessoasGrupo() {
    this.serviceService.pesquisarGrupo({ grupo: this.grupoSelecionado.nome })
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
        this.toastr.success(pessoa.nome + ' foi Excluído(a) com Sucesso !');
      })
  }

}
