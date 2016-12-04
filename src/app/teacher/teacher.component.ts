import { Component, OnInit } from '@angular/core';

import { Teacher } from './teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teacher: Teacher;

  constructor() { }

  ngOnInit() {
    this.teacher = new Teacher(1, 'Alberto', 'albertorealfdez@gmail.com');
    this.teacher.courses = [
      {
        id: 1,
        name: 'Lógica Computacional',
        year: 2016
      },
      {
        id: 2,
        name: 'Dirección Estratégica de TI',
        year: 2016
      }
    ]
  }

}
