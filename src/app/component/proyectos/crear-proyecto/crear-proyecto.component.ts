import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Proyecto } from '../../../model/proyecto';
import { ProyectoService } from '../../../service/proyecto.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  constructor(
    public proyectoService: ProyectoService,
    public dialogRef: MatDialogRef<CrearProyectoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Proyecto) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
