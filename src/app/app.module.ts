import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from './header/header.module';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    HeaderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
