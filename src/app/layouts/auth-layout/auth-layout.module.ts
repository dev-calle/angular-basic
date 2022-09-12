import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
})
export class AuthLayoutModule { }
