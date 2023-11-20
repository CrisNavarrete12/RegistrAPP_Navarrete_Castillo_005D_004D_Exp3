import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'shield-half-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Login',
      icon:'person-outline',
      redirecTo:'/login'
    },
    {
      name:'Register',
      icon:'person-add-outline',
      redirecTo:'/register'
    },
    {
      name:'Información',
      icon:'book-outline',
      redirecTo:'/informacion'
    },
  ]
}
