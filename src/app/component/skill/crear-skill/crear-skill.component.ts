import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Skill } from '../../../model/skill';
import { SkillService } from '../../../service/skill.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-crear-skill',
  templateUrl: './crear-skill.component.html',
  styleUrls: ['./crear-skill.component.css']
})
export class CrearSkillComponent implements OnInit {

  constructor(
    public skillService: SkillService,
    public dialogRef: MatDialogRef<CrearSkillComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Skill) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
