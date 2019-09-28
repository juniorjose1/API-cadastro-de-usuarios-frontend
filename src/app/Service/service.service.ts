import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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

  getPessoaSemAutenticacao(){
    return this.http.get<Pessoa[]>(this.Url);
  }

  getPessoas() {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');
    return this.http.get<Pessoa[]>(this.Url, {headers});
  }

  cadastrarPessoas(pessoa: Pessoa) {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.post<Pessoa[]>(this.Url, pessoa, {headers});
  }

  getPessoaId(id: number) {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get<Pessoa>(this.Url + "/" + id, {headers});
  }

  atualizarPessoas(pessoa: Pessoa) {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.put<Pessoa>(this.Url + "/" + pessoa.id, pessoa, {headers});
  }

  deletarPessoas(pessoa: Pessoa) {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.delete<Pessoa[]>(this.Url + "/" + pessoa.id, {headers});
  }

  pesquisarNome(filtroNome: PessoaFiltroNome): Promise<any> {
    
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');
    
    let params = new HttpParams();

    if (filtroNome.nome) {
      params = params.set('nome', filtroNome.nome);
    }

    return this.http.get(`${this.Url}`, { headers, params })
      .toPromise()
      .then(response =>
        response);
  }

  pesquisarIdade(filtroIdade: any): Promise<any> {
    
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    let params = new HttpParams();

    if (filtroIdade.idade) {
      params = params.set('idade', filtroIdade.idade);
    }

    return this.http.get(`${this.Url}`, { headers, params })
      .toPromise().then(response => response);

  }

  relatorioPessoas(){
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get(`${this.Url}/relatorio`, {responseType: "blob", headers})
    .toPromise()
    .then(response => response);
  }

  relatorioPessoaSemAutenticacao(){
    return this.http.get(`${this.Url}/relatorio`, {responseType: "blob"})
    .toPromise()
    .then(response => response);
  }

}
