import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  graficoSexo: any;

  graficoGrupo: any;

  graficoIdade: any;

  barraTotalConvidados: any;

  graficoStatus: any;

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.configurarGraficoPizzaSexo();
    this.configurarGraficoDonutsGrupo();
    this.configurarGraficoPizzaIdade();
    this.configurarGraficoTotalConvidados();
    this.configurarGraficoPizzaStatus();
  }

  configurarGraficoPizzaSexo(){
    this.service.pessoasPorSexo()
    .then(dados => {
     this.graficoSexo = {
        labels: dados.map(dado => dado.sexo),
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: ['#42A5F5', '#EF6CC6']
          }
        ]
      };
    });
  }

  configurarGraficoDonutsGrupo(){
    this.service.pessoasPorGrupo()
    .then(dados => {
     this.graficoGrupo = {
        labels: dados.map(dado => dado.grupo),
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: [
              '#FE642E',
              '#8A4B08',
              '#01DFD7',
              '#FFFF00',
              '#2E2E2E'
            ],
            hoverBackgroundColor: [
              '#FF4000',
              '#61380B',
              '#04B4AE',
              '#FFBF00',
              '#000000'
          ]
          }
        ]
      };
    });
  }

  configurarGraficoPizzaIdade(){
    this.service.pessoasPorIdade()
      .then(dados =>{
        this.graficoIdade = {
          labels: dados.map(dado => dado.idade),
          datasets: [
            {
              data: dados.map(dado => dado.total),
            backgroundColor: ['#0040FF', '#FE2E2E', '#642EFE']
            }
          ]
        }
      })
  }

  configurarGraficoPizzaStatus(){
    this.service.pessoasPorStatus()
      .then(dados =>{
        this.graficoStatus = {
          labels: dados.map(dado => dado.status),
          datasets: [
            {
              data: dados.map(dado => dado.total),
            backgroundColor: ['#04B431', '#FFBF00']
            }
          ]
        }
      })
  }

  configurarGraficoTotalConvidados(){
    this.service.pessoasTotal()
      .then(dados => {
        this.barraTotalConvidados = dados.map(dado => dado.total)
      })
  }



}
