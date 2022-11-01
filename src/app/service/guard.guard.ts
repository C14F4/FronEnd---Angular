import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionService:AutenticacionService, private rutas:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 /*
   let currentUser = this.autenticacionService.UsuarioAutenticado;
	if (currentUser){
		return true;
	} else {
		this.rutas.navigate(['/login']);
		return false;
	}
	*/
	return true;
  }
  
}
