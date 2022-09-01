import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Educacion} from '../../../model/educacion';
import { EducacionService } from '../../../service/educacion.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {

  constructor(
    public educacionService: EducacionService,
    public dialogRef: MatDialogRef<EditEstudiosComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Educacion) {}

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
			this.educacionService.deleteEducacion(id).subscribe(data => {
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

