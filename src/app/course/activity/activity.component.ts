import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Activity } from '../../shared/activity/activity.model';
import { ActivityService } from '../../shared/activity/activity.service';
import { Student, StudentService } from '../../student';
import { SelectionEngineService } from '../../selection-engine/selection-engine.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {
  public activity: Activity;
  public selectedAnswer: number;
  public wrongAnswer: boolean;
  public student: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private studentService: StudentService,
    private selectionService: SelectionEngineService
  ) {}

  ngOnInit() {
    this.getCurrentActivity();
    
    // TODO: change to current student
    this.studentService.getStudent(JSON.parse(localStorage.getItem('user')))
      .subscribe(student => {
        if (student) {
          this.student = new Student(student._id, student.name, student.email, student.courses, student.activities, student.map); // TODO: check Object.assign
        }
      },
      error => {
        console.error('Error in get Course', error);
      });
  }

  public getCurrentActivity(): void {
    let activityId: number = this.activatedRoute.snapshot.params['id'];

    this.activityService.getActivity(activityId)
      .subscribe(
        activity => {
          if (activity) {
            this.activity = activity;
          }
        },
        error => {
          console.error('Error in get activity', error);
        }
      );
  }

  public sendAnswer(): void {
    // TODO: use a service
    this.selectionService.updateCompetences(this.selectedAnswer, this.activity, this.student);

    this.studentService.updateStudent(this.student)
        .subscribe(course => {
          window.history.back(); // TODO: change to current course page
        },
        error => {
          console.error('Error in update student', error);
        });
  }
}
