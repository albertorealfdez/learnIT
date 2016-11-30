import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher.model';

@Component({
  selector: 'tesis-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
  public teacher: Teacher;

  ngOnInit() {
    this.teacher = new Teacher();
    this.teacher.name = 'Juan';  
  }

}
