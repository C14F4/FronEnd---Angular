import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://ap-portfolio-c14f4.herokuapp.com/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL+ 'ver');
  }

  public saveEducacion(item: Educacion): Observable<any> {
    return this.http.post<any>(this.URL + 'edit', item);
  }

  public deleteEducacion(item: Number): Observable<any> {
    return this.http.delete<any>(this.URL + 'edit/' + item);
  }

  }