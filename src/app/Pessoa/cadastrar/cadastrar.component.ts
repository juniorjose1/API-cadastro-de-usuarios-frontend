import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ToastrService } from 'ngx-toastr';

class Genero{
  constructor(public sexo: string) { }
}

class Idade{
  constructor(public idade: string) { }
}

class Grupo{
  constructor(public grupo: string) { }
}

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})


export class CadastrarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  genero = ['Homem', 'Mulher']
  sexoSelecionado: Genero = new Genero('');

  faixaEtaria = ['Adulto', 'Criança/Adolescente', 'Bebê']
  idadeSelecionada: Idade = new Idade('');

  grupoCasamento = ['Amigos do Noivo', 'Família do Noivo', 'Amigos da Noiva', 'Família da Noiva', 'Amigos em Comum']
  grupoSelecionado: Grupo = new Grupo('');
    
  constructor(private router: Router, private service: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  Cadastrar(nome: String, idade: String, sexo:String, grupo:String) {
    this.pessoa.nome = nome;
    this.pessoa.idade = idade;
    this.pessoa.sexo = sexo;
    this.pessoa.grupo = grupo;

    this.service.cadastrarPessoas(this.pessoa)
      .subscribe(data => {
        this.toastr.success('Cadastro Feito com Sucesso !')
        this.router.navigate(["listar"]);
      })
  }

}
