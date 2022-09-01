import { Component, OnInit, ViewChild } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';
import { EditEstudiosComponent } from './edit-estudios/edit-estudios.component'
import { CrearEducacionComponent } from './crear-educacion/crear-educacion.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import swal from 'sweetalert';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Educacion[] = [];
  
  constructor(
    public educacionService: EducacionService,
	public dialog: MatDialog,
	public dialogEstudio: MatDialog,
  ) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => this.estudios = data);
  }

  abrirDialogo(id: any) {
    const dialogo1 = this.dialog.open(EditEstudiosComponent, { 
		data: this.estudios[id]
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
	  {
		if (art == "eliminado")
			this.educacionService.getEducacion().subscribe(data => this.estudios = data);
		if (typeof art.id === 'number')
			this.educacionService.saveEducacion(art).subscribe(data => {
				swal({
					title: "El item fue modificado.", 
					icon: "success",
				});
			});
			//this.educacionService.getEducacion().subscribe(data => this.estudios = data);
	  }
    });
  }
  
	nuevoEstudio() {
		const dialogoEstudio = this.dialogEstudio.open(CrearEducacionComponent, { 
			data: new Educacion("","","","","")
		});

		dialogoEstudio.afterClosed().subscribe(art => {
		  if (art != undefined)
		  {
			if (typeof art.instituto != null)
				this.educacionService.newEducacion(art).subscribe(data => {
					swal({
						title: "El item fue creado.",
						icon: "success",
					});
					this.educacionService.getEducacion().subscribe(data => this.estudios = data);
				});
		  }
		});
	  }


}
