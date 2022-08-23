import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = 'https://ap-portfolio-c14f4.herokuapp.com/skill/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.URL+ 'ver');
  }

  public saveSkill(item: Skill): Observable<any> {
    return this.http.post<any>(this.URL + 'edit', item);
  }

  public deleteSkill(item: Number): Observable<any> {
    return this.http.delete<any>(this.URL + 'borrar/' + item);
  }

  }