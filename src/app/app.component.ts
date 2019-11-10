import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router, private service: ServiceService) { }

  Listar() {
    this.router.navigate(["listar"]);
  }

  Novo() {
    this.router.navigate(["cadastrar"]);
  }

  Editar() {
    this.router.navigate(["editar"]);
  }

  Pesquisar() {
    this.router.navigate(["pesquisar"]);
  }

  VerificarSeguranca(){
    this.router.navigate(["verificarseguranca"]);
  }

  Dashboard(){
    this.router.navigate(["dashboard"]);
  }

  Gerar(){
    this.service.relatorioPessoas()
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio); 
      window.open(url);   
    })
  }



}
