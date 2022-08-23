import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Educacion[] = [];

  constructor(
    public educacionService: EducacionService,
  ) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => this.estudios = data);
  }


}
