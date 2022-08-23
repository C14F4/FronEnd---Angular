import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from '../../service/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(
    public experienciaService: ExperienciaService,
  ) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencia = data);
  }

}
