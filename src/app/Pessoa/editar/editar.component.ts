import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pessoa:Pessoa = new Pessoa();

  constructor(private router:Router, private service:ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    
    let id=localStorage.getItem("id");
    this.service.getPessoaId(+id)
    .subscribe(data=>{
      this.pessoa=data;
    })

  }

  Atualizar(pessoa:Pessoa){
    this.service.atualizarPessoas(pessoa)
    .subscribe(data=>{
      this.pessoa=data;
      this.toastr.success('Atualização Feita Com Sucesso !')
      this.router.navigate(["listar"]);
    })

  }

}
