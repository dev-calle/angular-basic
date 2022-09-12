import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
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
    HttpClientModule,

    AppRoutingModule,
    AuthLayoutModule,
    AdminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
