import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;

  doughnutChartData: any;

  pieChartData2: any;

  barraTotal: any;

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.configurarGraficoPizza();
    this.configurarGraficoDonuts();
    this.configurarGraficoPizza2();
    this.configurarGraficoTotal();
  }

  configurarGraficoPizza(){
    this.service.pessoasPorSexo()
    .then(dados => {
     this.pieChartData = {
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

  configurarGraficoDonuts(){
    this.service.pessoasPorGrupo()
    .then(dados => {
     this.doughnutChartData = {
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

  configurarGraficoPizza2(){
    this.service.pessoasPorIdade()
      .then(dados =>{
        this.pieChartData2 = {
          labels: dados.map(dado => dado.idade),
          datasets: [
            {
              data: dados.map(dado => dado.total),
            backgroundColor: ['#0040FF', '#FE2E2E', '#04B431']
            }
          ]
        }
      })
  }

  configurarGraficoTotal(){
    this.service.pessoasTotal()
      .then(dados => {
        this.barraTotal = dados.map(dado => dado.total)
      })
  }



}
