import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const _adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // configurar rutas hijas
    loadChildren: () => import( './admin-layout-children.routes' ).then( (m) => m.AdminLayoutRoutesModule )
  }
]

@NgModule({
  imports: [ RouterModule.forChild( _adminRoutes ) ],
  exports: [ RouterModule ],
})
export class AdminLayoutRoutingModule { }
