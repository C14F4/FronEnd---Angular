import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../model/perfil';
import { PerfilService } from '../../service/perfil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfil2: Perfil = new Perfil(0,"","","","","","","","","","");

  constructor(
    public perfilService: PerfilService,
  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => this.perfil2 = data[0]);
  }

}
