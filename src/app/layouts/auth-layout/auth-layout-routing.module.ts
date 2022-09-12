import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';

const _routes: Routes = [
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   loadChildren: () => import('./auth-layout.routes').then( (m) => m.AuthLayoutRoutesModule )
  // },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth-layout.routes').then( (m) => m.AuthLayoutRoutesModule )
  }
];

@NgModule({
  imports: [ RouterModule.forChild( _routes ) ],
  exports: [ RouterModule ],
})
export class AuthLayoutRoutingModule { }
