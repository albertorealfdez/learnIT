import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// App modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';

// App components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    TeacherModule,
    CourseModule
  ],
  declarations: [
    AppComponent
  ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
