import { Component, OnInit, Input } from '@angular/core';

import { Competence } from '../../shared/competence/competence.model';
import { DashboardCompetenceService } from './dashboard-competence.service';

@Component({
  selector: 'app-dashboard-competence',
  templateUrl: './dashboard-competence.component.html',
  styleUrls: ['./dashboard-competence.component.scss']
})

export class DashboardCompetenceComponent implements OnInit {
  public requestLoading: boolean;

  @Input() competence: Competence;

  constructor(private competenceService: DashboardCompetenceService) { }

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
    .then(competence => {
        this.requestLoading = false;
      })
      .catch(error => {
        console.error('Error in create competence', error);
      });
  }

  public updateCompetence(): void {
    this.requestLoading = true;

    this.competenceService.updateCompetence(this.competence)
    .then(competence => {
        this.requestLoading = false;
      })
      .catch(error => {
        console.error('Error in updateCompetence', error);
      });
  }
}
