import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ProyectoComponent } from './dialogos/proyecto/proyecto.component';
import { EducacionComponent } from './dialogos/educacion/educacion.component';
import { ExperienciaComponent } from './dialogos/experiencia/experiencia.component';

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
    ProyectoComponent,
    EducacionComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
