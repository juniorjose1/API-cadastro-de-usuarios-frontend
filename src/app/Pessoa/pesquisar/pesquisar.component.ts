import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  pessoas:Pessoa[];
  nome: string;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  this.PesquisarPessoas();
  }

  PesquisarPessoas(){
    this.serviceService.pesquisar({nome: this.nome})
    .then(pessoas => this.pessoas = pessoas);
  }

}
