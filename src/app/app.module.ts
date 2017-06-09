import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// App modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';

// App components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, // Angular modules
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), // App modules
    CoreModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    DashboardModule,
    StudentModule,
    CourseModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
