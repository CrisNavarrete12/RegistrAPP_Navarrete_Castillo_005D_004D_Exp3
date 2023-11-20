import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private router: Router,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Perfil() {
    this.router.navigate(['/perfil']);
  }

  EscanearQr() {
    this.router.navigate(['/leerqr']);
  }

  VerAsistencia() {
    this.router.navigate(['/asistencia']);
  }

  ActualizarPerfil() {
    this.router.navigate(['/perfilactualizar']);
  }

}
