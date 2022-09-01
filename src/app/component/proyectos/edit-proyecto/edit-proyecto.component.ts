import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Proyecto } from '../../../model/proyecto';
import { ProyectoService } from '../../../service/proyecto.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
	
	constructor(
		public proyectoService: ProyectoService,
		public dialogRef: MatDialogRef<EditProyectoComponent>,
		@ Inject(MAT_DIALOG_DATA) public data: Proyecto ) {}

	  ngOnInit() {
	  }

	  cancelar() {
		this.dialogRef.close();
	  }

	  borrar(id: any) {
			swal({
			  title: "¿Desea borrar el item?",
			  icon: "warning",
			  buttons: ["Calcelar",true],
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
				console.log("borrar: "+id);
				this.proyectoService.deleteProyecto(id).subscribe(data => {
					swal({
						title: "El item fue eliminado.", 
						icon: "success",
					});
				});
				this.dialogRef.close("eliminado");
			  }
			});
			
	  }
}
