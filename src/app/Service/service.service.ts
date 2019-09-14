import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pessoa } from '../Modelo/Pessoa';

export interface PessoaFiltroNome {
  nome: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/pessoas';

  getPessoas() {
    return this.http.get<Pessoa[]>(this.Url);
  }

  cadastrarPessoas(pessoa: Pessoa) {
    return this.http.post<Pessoa[]>(this.Url, pessoa);
  }

  getPessoaId(id: number) {
    return this.http.get<Pessoa>(this.Url + "/" + id);
  }

  atualizarPessoas(pessoa: Pessoa) {
    return this.http.put<Pessoa>(this.Url + "/" + pessoa.id, pessoa);
  }

  deletarPessoas(pessoa: Pessoa) {
    return this.http.delete<Pessoa[]>(this.Url + "/" + pessoa.id);
  }

  pesquisarNome(filtroNome: PessoaFiltroNome): Promise<any> {
    let params = new HttpParams();

    if (filtroNome.nome) {
      params = params.set('nome', filtroNome.nome);
    }

    return this.http.get(`${this.Url}`, { params })
      .toPromise()
      .then(response =>
        response);
  }

  pesquisarIdade(filtroIdade: any): Promise<any> {
    let params = new HttpParams();

    if (filtroIdade.idade) {
      params = params.set('idade', filtroIdade.idade);
    }

    return this.http.get(`${this.Url}`, { params })
      .toPromise().then(response => response);

  }

}
