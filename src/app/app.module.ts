import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// App modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { TeacherModule } from './teacher/teacher.module';

// App components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    TeacherModule
  ],
  declarations: [
    AppComponent
  ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
