import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './course.model';
import { CourseService } from './course.service';
import { CompetenceService } from './competence';

import { StudentMap } from '../student-map';
import { StudentCompetence } from '../shared/competence/student-competence.model';
import { Activity } from '../shared/activity/activity.model';
import {
  Student,
  StudentService
} from '../student';
import { StudentMapService } from '../student-map/student-map.service';
import { SelectionEngineService } from '../selection-engine/selection-engine.service';
import { StudentCompetenceService } from '../shared/competence/student-competence.service';
import { ActivityService } from '../shared/activity/activity.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {
  public course: Course;
  public showNewCompetence: boolean;
  public currentMap: StudentMap;
  public student: Student; 
    
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private studentService: StudentService,
    private studentMapService: StudentMapService,
    private competenceService: StudentCompetenceService,
    private selectionService: SelectionEngineService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.student = this.studentService.getCurrentStudent();
    
    if (!this.student) {
      this.router.navigateByUrl('/student');
    } else {
      this.getCurrentCourse();
    }
  }

  public getCurrentCourse(): void {
    let courseKey: string = this.activatedRoute.snapshot.params['key'];
    this.courseService.getCourseByKey(courseKey)
      .subscribe(course => {
          if (course) {            
            this.course = course; // TODO: check Object.assign
            this.getCourseActivites();
            this.currentMap = this.student.maps.filter(map => map.courseId == this.course._id)[0];
          }
        },
        error => {
          console.error('Error in get Course', error);
        }
      );
  }

  public setStudenMap(studentMapId): void { // TODO: make common
    this.studentMapService.getStudentMap(studentMapId) // Change to obtain current course 
      .subscribe(map => {
          if (map) {
            this.currentMap = map;
            this.setStudentCompenteces(map.competences);
          }
        },
        error => {
          console.error('Error in get Course', error);
        }
      );
  }

  public setStudentCompenteces(competences)  {
    this.currentMap.competences = [];
    for (let competenceId of competences) {
        this.competenceService.getCompetence(competenceId)
          .subscribe(competence => {
            if (competence) {
              this.currentMap.competences.push(competence);
            }
          },
          error => {
            console.error('Error in get Course', error);
          });
    }
  }

  public getCourseActivites() {
    this.activityService.getActivitiesByCourse(this.course._id)
      .subscribe(activities => {
          if (activities) {
            this.course.activities = activities; // TODO: check Object.assign
          }
        },
        error => {
          console.error('Error in get Course', error);
        }
      );
  }

  public checkCompetence(compentence: StudentCompetence): void {
    let activity: Activity = this.selectionService.getNextActivity(this.student, this.course, compentence);

    if (activity) {
      this.router.navigate(['/activity', activity._id]);
    }
  }
}
