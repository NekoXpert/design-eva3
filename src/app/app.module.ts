import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CursosComponent } from './cursos/cursos.component';
import { EspecializacionesComponent } from './especializaciones/especializaciones.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';  
import { FooterComponent } from './footer/footer.component';
import { AulavirtualComponent } from './aulavirtual/aulavirtual.component';

@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ContactosComponent,
    CursosComponent,
    EspecializacionesComponent,
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AulavirtualComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }