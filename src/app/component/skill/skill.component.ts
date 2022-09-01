import { Component, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';
import { SkillService } from '../../service/skill.service';

import { EditSkillComponent } from './edit-skill/edit-skill.component'
import { CrearSkillComponent } from './crear-skill/crear-skill.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import swal from 'sweetalert';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    public skillService: SkillService,
	public dialog3: MatDialog,
	public dialogSkill: MatDialog,
  ) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => this.skill = data);
  }

  abrirDialogoSkill(id: any) {
    const dialogo3 = this.dialog3.open(EditSkillComponent, { 
		data: this.skill[id]
    });

    dialogo3.afterClosed().subscribe(art => {
      if (art != undefined)
	  {
		if (art == "eliminado")
			this.skillService.getSkill().subscribe(data => this.skill = data);
		if (typeof art.id === 'number')
			this.skillService.saveSkill(art).subscribe(data => {
				swal({
					title: "El item fue modificado.", 
					icon: "success",
				});
			});
	  }
    });
  }
  
	nuevoSkill() {
		const dialogoSkill = this.dialogSkill.open(CrearSkillComponent, { 
			data: new Skill("","",0)
		});

		dialogoSkill.afterClosed().subscribe(art => {
		  if (art != undefined)
		  {
			if (typeof art.instituto != null)
				this.skillService.newSkill(art).subscribe(data => {
					swal({
						title: "El item fue creado.",
						icon: "success",
					});
					this.skillService.getSkill().subscribe(data => this.skill = data);
				});
		  }
		});
	  }


}
