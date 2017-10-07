import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';

// App components
import { AppComponent } from './app.component';

// Interceptors
import { XHRInterceptor } from './interceptors/xhr.interceptor';


@NgModule({
  imports: [
    BrowserModule, // Angular modules
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule, // App modules
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    StudentModule,
    CourseModule
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XHRInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
