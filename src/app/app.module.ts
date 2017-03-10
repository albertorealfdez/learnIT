import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// App modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CourseDashboardModule } from './course-dashboard/course-dashboard.module';

// App components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, // Angular modules
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), // App modules
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    TeacherModule,
    StudentModule,
    CourseModule,
    CourseDashboardModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
