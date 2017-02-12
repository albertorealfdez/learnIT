import { Component, OnInit, Input } from '@angular/core';

import { Competence } from './competence.model';
import { CompetenceService } from './competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})

export class CompetenceComponent implements OnInit {
  @Input() competence: Competence;

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
  }
  
  public updateCompetence(): void {
    this.competenceService.updateCompetence(this.competence)
    .then(competence => {
        console.log('Updated')
      })
      .catch(error => {
        console.error('Error in updateCompetence', error);
      });
  }
}
