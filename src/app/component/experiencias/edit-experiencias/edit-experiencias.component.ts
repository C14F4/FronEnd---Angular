import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Experiencia } from '../../../model/experiencia';
import { ExperienciaService } from '../../../service/experiencia.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-edit-experiencias',
  templateUrl: './edit-experiencias.component.html',
  styleUrls: ['./edit-experiencias.component.css']
})
export class EditExperienciasComponent implements OnInit {
 constructor(
    public experienciaService: ExperienciaService,
    public dialogRef: MatDialogRef<EditExperienciasComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Experiencia) {}

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
			this.experienciaService.deleteExperiencia(id).subscribe(data => {
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
