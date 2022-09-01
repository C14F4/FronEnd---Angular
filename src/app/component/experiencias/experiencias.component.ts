import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from '../../service/experiencia.service';

import { EditExperienciasComponent } from './edit-experiencias/edit-experiencias.component'
import { CrearExperienciaComponent } from './crear-experiencia/crear-experiencia.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import swal from 'sweetalert';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(
    public experienciaService: ExperienciaService,
	public dialog2: MatDialog,
	public dialogExperiencia: MatDialog,
  ) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencia = data);
  }
  
  abrirDialogo2(id: any) {
    const dialogo2 = this.dialog2.open(EditExperienciasComponent, { 
		data: this.experiencia[id]
    });

    dialogo2.afterClosed().subscribe(art => {
      if (art != undefined)
	  {
		if (art == "eliminado")
			this.experienciaService.getExperiencia().subscribe(data => this.experiencia = data);
		if (typeof art.id === 'number')
			this.experienciaService.saveExperiencia(art).subscribe(data => {
				swal({
					title: "El item fue modificado.", 
					icon: "success",
				});
			});
	  }
    });
  }
  
	nuevaExperiencia() {
		const dialogoExperiencia = this.dialogExperiencia.open(CrearExperienciaComponent, { 
			data: new Experiencia("","","","","")
		});

		dialogoExperiencia.afterClosed().subscribe(art => {
		  if (art != undefined)
		  {
			if (typeof art.trabajo != null)
				this.experienciaService.newExperiencia(art).subscribe(data => {
					swal({
						title: "El item fue creado.",
						icon: "success",
					});
					this.experienciaService.getExperiencia().subscribe(data => this.experiencia = data);
				});
		  }
		});
	  }



}
