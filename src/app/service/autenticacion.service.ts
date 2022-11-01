import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "https://ap-portfolio-c14f4.herokuapp.com/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }
  
  iniciarSesion(credenciales:any):Observable<any>{
     return this.http.post<any>(this.url,credenciales).pipe(map(data=>{
		 sessionStorage.setItem('currentUser',JSON.stringify(data.headers.Authorization));
		 this.currentUserSubject.next(data);
		 console.log("DATA:"+data.headers.Authorization);
		 return data;
	 }));
  }
  
  get UsuarioAutenticado()
  {
	  return this.currentUserSubject.value;
  }

  
}
