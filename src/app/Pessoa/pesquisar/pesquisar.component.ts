import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  pessoas = [];
  nome: string;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.pesquisar();
  }
  
  pesquisar(){  
    this.serviceService.pesquisar({nome: this.nome})
    .then(pessoas => this.pessoas = pessoas);
  }
}
