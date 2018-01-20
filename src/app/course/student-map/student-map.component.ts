import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

import { StudentCompetence, Activity } from 'app/shared';
import { StudentMap } from './student-map.model';
import { SelectionEngineService } from 'app/selection-engine/selection-engine.service';
import { Student } from 'app/student/student.model';
import { Course } from '../course.model';

@Component({
  selector: 'app-student-map',
  templateUrl: './student-map.component.html',
  styleUrls: ['./student-map.component.scss']
})
export class StudentMapComponent implements OnInit {
  @Input() studentMap: StudentMap;
  @Input() student: Student;
  @Input() course: Course;

  constructor(
    private selectionService: SelectionEngineService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  public checkCompetence(compentence: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentence);

    if (activity) {
      this.router.navigate(['/activity', activity._id]);
    }
  }
}
