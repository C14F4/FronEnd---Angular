import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Experiencia } from '../../../model/experiencia';
import { ExperienciaService } from '../../../service/experiencia.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {
	
constructor(
    public experienciaService: ExperienciaService,
    public dialogRef: MatDialogRef<CrearExperienciaComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Experiencia) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
