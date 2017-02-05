import { Component, OnInit, Input } from '@angular/core';

import { Competence } from './competence.model';

@Component({
  moduleId: module.id,
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  @Input() competence: Competence;

  constructor() { }

  ngOnInit() {
  }

}
