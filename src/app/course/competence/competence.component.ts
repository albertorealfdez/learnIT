import { Component, OnInit, Input } from '@angular/core';

import { Competence } from '../../shared/competence/competence.model';
import { CompetenceService } from './competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})

export class CompetenceComponent implements OnInit {
  public requestLoading: boolean;

  @Input() competence: Competence;

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
  }

  public createOrUpdateCompetence() {
    if (this.competence.id) {
      this.updateCompetence();
    } else {
      this.createCompetence();
    }
  }

  public createCompetence(): void {
    this.requestLoading = true;

    this.competenceService.createCompetence(this.competence)
    .subscribe(
      competence => {
        this.requestLoading = false;
      },
      error => {
        console.error('Error in create competence', error);
      }
    );
  }

  public updateCompetence(): void {
    this.requestLoading = true;

    this.competenceService.updateCompetence(this.competence)
    .subscribe(competence => {
        this.requestLoading = false;
      },
      error => {
        console.error('Error in updateCompetence', error);
      }
    );
  }
}
