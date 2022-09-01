import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Perfil} from '../../../model/perfil';
import { PerfilService } from '../../../service/perfil.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})

export class EditPerfilComponent implements OnInit {

  constructor(
    public perfilService: PerfilService,
    public dialogRef: MatDialogRef<EditPerfilComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Perfil) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}

