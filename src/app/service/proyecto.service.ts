import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://ap-portfolio-c14f4.herokuapp.com/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL+ 'ver');
  }

  public saveProyecto(item: Proyecto): Observable<any> {
    return this.http.post<any>(this.URL + 'edit', item);
  }

  public deleteProyecto(item: Number): Observable<any> {
    return this.http.delete<any>(this.URL + 'borrar/' + item);
  }

  }