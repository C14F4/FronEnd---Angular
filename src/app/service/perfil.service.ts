import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../model/perfil';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = 'https://ap-portfolio-c14f4.onrender.com/perfil/';

  constructor(private http: HttpClient) { }

  public getPerfil(): Observable<Perfil> {
    return this.http.get<Perfil>(this.URL+ 'ver');
  }

  public savePerfil(perfil: Perfil): Observable<any> {
    return this.http.put<any>(this.URL + 'edit', perfil);
  }

  }