import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Skill } from '../../../model/skill';
import { SkillService } from '../../../service/skill.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
constructor(
		public skillService: SkillService,
		public dialogRef: MatDialogRef<EditSkillComponent>,
		@ Inject(MAT_DIALOG_DATA) public data: Skill ) {}

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
				this.skillService.deleteSkill(id).subscribe(data => {
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
