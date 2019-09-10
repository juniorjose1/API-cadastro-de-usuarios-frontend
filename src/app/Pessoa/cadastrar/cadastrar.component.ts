import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  pessoa:Pessoa=new Pessoa();

  constructor(private router:Router, private service:ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  Cadastrar(nome:String, idade:number){
    this.pessoa.nome = nome;
    this.pessoa.idade = idade;

    this.service.cadastrarPessoas(this.pessoa)
    .subscribe(data=>{
      this.toastr.success('Cadastro Feito com Sucesso !') 
      this.router.navigate(["listar"]);
    })
    
  }

}
