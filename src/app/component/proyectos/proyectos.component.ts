import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../model/proyecto';
import { ProyectoService } from '../../service/proyecto.service';

import { EditProyectoComponent } from './edit-proyecto/edit-proyecto.component'
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import swal from 'sweetalert';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(
    public proyectoService: ProyectoService,
	public dialog4: MatDialog,
	public dialogProyecto: MatDialog,
  ) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => this.proyecto = data);
  }

	abrirDialogo4(id: any) {
		const dialogo4 = this.dialog4.open(EditProyectoComponent, { 
			data: this.proyecto[id]
		});

		dialogo4.afterClosed().subscribe(art => {
		  if (art != undefined)
		  {
			if (art == "eliminado")
				this.proyectoService.getProyecto().subscribe(data => this.proyecto = data);
			if (typeof art.id === 'number')
				this.proyectoService.saveProyecto(art).subscribe(data => {
					swal({
						title: "El item fue modificado.", 
						icon: "success",
					});
				});
		  }
		});
	  }
  
	nuevoProyecto() {
		const dialogoProyecto = this.dialogProyecto.open(CrearProyectoComponent, { 
			data: new Proyecto("","","","","")
		});

		dialogoProyecto.afterClosed().subscribe(art => {
		  if (art != undefined)
		  {
			if (typeof art.nombre != null)
				this.proyectoService.newProyecto(art).subscribe(data => {
					swal({
						title: "El item fue creado.",
						icon: "success",
					});
					this.proyectoService.getProyecto().subscribe(data => this.proyecto = data);
				});
		  }
		});
	  }


}
