import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

// un módulo es un contenedor de los componentes, rutas y demás

@NgModule({

  declarations: [
    AdminLayoutComponent,
    HomeComponent,
    UserComponent
  ],

  imports: [
    CommonModule, // importar utilidades de angular ( ngFor, ngIf .... )
    RouterModule
  ],
})
export class AdminLayoutModule { }
