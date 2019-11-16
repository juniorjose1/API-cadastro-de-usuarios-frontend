import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Pessoa } from '../Modelo/Pessoa';
import { environment } from 'src/environments/environment.prod';

export interface PessoaFiltroNome {
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url: string;

  constructor(private http: HttpClient) {
    this.Url = `${environment.apiUrl}/pessoas`;
   }

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

  pesquisarSexo(filtroSexo: any): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');
    
    let params = new HttpParams();

    if (filtroSexo.sexo) {
      params = params.set('sexo', filtroSexo.sexo);
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

  pesquisarGrupo(filtroGrupo: any): Promise<any> {
    
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    let params = new HttpParams();

    if (filtroGrupo.grupo) {
      params = params.set('grupo', filtroGrupo.grupo);
    }  

    return this.http.get(`${this.Url}`, { headers, params })
      .toPromise().then(response => response);

  }

  pesquisarStatus(filtroStatus: any): Promise<any> {
    
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    let params = new HttpParams();

    if (filtroStatus.status) {
      params = params.set('status', filtroStatus.status);
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

  pessoasPorSexo(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get(`${this.Url}/estatisticas/por-sexo`, {headers})
      .toPromise()
      .then(response => response);
  }

  pessoasPorIdade(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get(`${this.Url}/estatisticas/por-idade`, {headers})
      .toPromise()
      .then(response => response);
  }

  pessoasPorGrupo(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get(`${this.Url}/estatisticas/por-grupo`, {headers})
      .toPromise()
      .then(response => response);
  }

  pessoasPorStatus(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.get(`${this.Url}/estatisticas/por-status`, {headers})
      .toPromise()
      .then(response => response);
  }

  pessoasTotal(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');
    
    return this.http.get(`${this.Url}/estatisticas/total`, {headers})
      .toPromise()
      .then(response => response);
  }

  deletarTudo() {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWxleGFuZHJlOmFsZTE2MDU=');

    return this.http.delete<Pessoa[]>(this.Url, {headers});
  }

  

}
