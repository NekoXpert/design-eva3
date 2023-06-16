import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CursosComponent } from './cursos/cursos.component';
import { EspecializacionesComponent } from './especializaciones/especializaciones.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AulavirtualComponent } from './aulavirtual/aulavirtual.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'contactos', component: ContactosComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'especializaciones', component: EspecializacionesComponent },
      {
        path: 'aulavirtual', component: AulavirtualComponent }
    ]
  },
  
  { path: '**', redirectTo: 'inicio' } // Esto redireccionará cualquier ruta no reconocida a 'inicio'.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
