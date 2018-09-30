import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

// App modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

// App components
import { AppComponent } from './app.component';

// Interceptors
import { XHRInterceptor } from './interceptors/xhr.interceptor';


@NgModule({
  imports: [
    BrowserModule, // Angular modules
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule, // App modules
    AppRoutingModule,
    HomeModule
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XHRInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
