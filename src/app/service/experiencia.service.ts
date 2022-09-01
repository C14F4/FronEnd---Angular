import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://ap-portfolio-c14f4.herokuapp.com/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL+ 'ver');
  }

  public newExperiencia(item: Experiencia): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', item);
  }
  
  public saveExperiencia(item: Experiencia): Observable<any> {
    return this.http.put<any>(this.URL + 'edit', item);
  }

  public deleteExperiencia(item: Number): Observable<any> {
    return this.http.delete<any>(this.URL + 'borrar/' + item);
  }

  }