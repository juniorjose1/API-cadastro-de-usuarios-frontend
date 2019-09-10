import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas:Pessoa[];
  constructor(private service:ServiceService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getPessoas()
    .subscribe(data=>{ 
      this.pessoas=data; 
    })
  }

  Editar(pessoa:Pessoa):void{
    localStorage.setItem("id",pessoa.id.toString());
    this.router.navigate(["editar"]);
  }

  Deletar(pessoa:Pessoa){
    this.service.deletarPessoas(pessoa)
    .subscribe(data=>{
      this.pessoas=this.pessoas.filter(p=>p!==pessoa);
      this.toastr.success(pessoa.nome + ' Excluído(a) Com Sucesso !');
    })
  }



}
