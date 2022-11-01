import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';
import { Router } from '@angular/router';

import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){
	this.form = this.formBuilder.group(
		{
			username:['',[Validators.required,Validators.email]],
			password:['',[Validators.required, Validators.minLength(6)]]
		}
	)
	  }

  ngOnInit() {
  }
  
  login(event:Event){
	 
	event.preventDefault();
	console.log(JSON.stringify(this.form.value));
	this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
		console.log("DATA:"+ JSON.stringify(data));
		this.ruta.navigate(['/home']);
	});
	 
	}
	  
  get Username(){
	  return this.form.get('username');
  }
  
  get Password(){
	  return this.form.get('password');
  }
  
irHome(){
	this.ruta.navigate(['/home']);
}

}
