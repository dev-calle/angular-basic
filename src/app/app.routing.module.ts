import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutRoutingModule } from './layouts/auth-layout/auth-layout-routing.module';
import { AdminLayoutRoutingModule } from './layouts/admin-layout/admin-layout.routing.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes ),
    AuthLayoutRoutingModule,
    AdminLayoutRoutingModule
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
