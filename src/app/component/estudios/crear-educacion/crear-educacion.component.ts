import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Educacion} from '../../../model/educacion';
import { EducacionService } from '../../../service/educacion.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {

  constructor(
    public educacionService: EducacionService,
    public dialogRef: MatDialogRef<CrearEducacionComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Educacion) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
