import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-verificar-seguranca',
  templateUrl: './verificar-seguranca.component.html',
  styleUrls: ['./verificar-seguranca.component.css']
})
export class VerificarSegurancaComponent implements OnInit {

  pessoas:Pessoa[];

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getPessoaSemAutenticacao()
      .subscribe(data => {
        this.pessoas = data;
      })
  }

  gerar(){
    this.service.relatorioPessoaSemAutenticacao()
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio); 
      window.open(url);   
    })
  }

}
