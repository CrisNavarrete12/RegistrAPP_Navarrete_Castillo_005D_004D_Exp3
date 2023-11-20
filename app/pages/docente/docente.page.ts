import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private menuController: MenuController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  PerfilDocente() {
    this.router.navigate(['/perfil']);
  }

  GenerarQr() {
    this.router.navigate(['/qr']);
  }

  ActualizarPerfil() {
    this.router.navigate(['/perfilactualizar']);
  }

}
