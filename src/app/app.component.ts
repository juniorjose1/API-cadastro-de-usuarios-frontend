import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from './Modelo/Pessoa';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo1';


  constructor(private router:Router, private serviceService: ServiceService){}

  
  Listar(){
    this.router.navigate(["listar"]);
  }

  Novo(){
    this.router.navigate(["cadastrar"]);
  }

  Editar(){
    this.router.navigate(["editar"]);
  }

  Pesquisar(){
    this.router.navigate(["pesquisar"]);
  }

}
