import { Component, OnInit, ViewChild } from '@angular/core';
import { Perfil } from '../../model/perfil';
import { PerfilService } from '../../service/perfil.service';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component'

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import swal from 'sweetalert';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: Perfil = new Perfil(0,"","","","","","","","","","");


  constructor(
    public perfilService: PerfilService,
	public dialog: MatDialog,
	public dialogEstudio: MatDialog,

  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => this.perfil = data[0]);
  }
  
  abrirDialogoPerfil(id: any) {
    const dialogo = this.dialog.open(EditPerfilComponent, { 
		data: this.perfil
    });

    dialogo.afterClosed().subscribe(art => {
      if (art != undefined)
	  {
		if (typeof art.id === 'number')
			this.perfilService.savePerfil(art).subscribe(data => {
				swal({
					title: "El item fue modificado.", 
					icon: "success",
				});
			});
	  }
    });
  }

  onLogout() {
    window.location.reload();
  }
}
