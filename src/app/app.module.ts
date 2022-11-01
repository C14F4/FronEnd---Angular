import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //agregado manualmente

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { EstudiosComponent } from './component/estudios/estudios.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEstudiosComponent } from './component/estudios/edit-estudios/edit-estudios.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CrearEducacionComponent } from './component/estudios/crear-educacion/crear-educacion.component';
import { CrearExperienciaComponent } from './component/experiencias/crear-experiencia/crear-experiencia.component';
import { CrearSkillComponent } from './component/skill/crear-skill/crear-skill.component';
import { CrearProyectoComponent } from './component/proyectos/crear-proyecto/crear-proyecto.component';
import { EditExperienciasComponent } from './component/experiencias/edit-experiencias/edit-experiencias.component';
import { EditProyectoComponent } from './component/proyectos/edit-proyecto/edit-proyecto.component';
import { EditPerfilComponent } from './component/perfil/edit-perfil/edit-perfil.component';
import { EditSkillComponent } from './component/skill/edit-skill/edit-skill.component';
import { LoginComponent } from './component/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';

import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    AcercaDeComponent,
    EstudiosComponent,
    ExperienciasComponent,
    SkillComponent,
    ProyectosComponent,
    FooterComponent,
    EditEstudiosComponent,
    CrearEducacionComponent,
    CrearExperienciaComponent,
    CrearSkillComponent,
    CrearProyectoComponent,
    EditExperienciasComponent,
    EditProyectoComponent,
    EditPerfilComponent,
    EditSkillComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	AppRoutingModule, // routing manual
	BrowserAnimationsModule, // dialog
	MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
	ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [
    EditEstudiosComponent,// <--- Aquí
	EditExperienciasComponent,
	EditProyectoComponent,
	EditPerfilComponent,
	EditSkillComponent,
	CrearEducacionComponent,
    CrearExperienciaComponent,
    CrearSkillComponent,
    CrearProyectoComponent
  ]
})
export class AppModule { }
