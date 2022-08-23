import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../model/perfil';
import { PerfilService } from '../../service/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: Perfil = new Perfil(0,"","","","","","","","","","");

  constructor(
    public perfilService: PerfilService,
  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => this.perfil = data[0]);
  }

  onLogout() {
    window.location.reload();
  }

}
