import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AppRoutingModule } from './app.routing.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    AuthLayoutModule,
    AdminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
