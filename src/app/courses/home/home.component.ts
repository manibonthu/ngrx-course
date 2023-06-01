<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { compareCourses, Course } from "../model/course";
import { Observable } from "rxjs";
import { defaultDialogConfig } from "../shared/default-dialog-config";
import { EditCourseDialogComponent } from "../edit-course-dialog/edit-course-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { map, shareReplay } from "rxjs/operators";
import { CoursesHttpService } from "../services/courses-http.service";
import { select, Store } from "@ngrx/store";
import {
  selectAdvancedCourses,
  selectAllCourses,
  selectBeginnerCourses,
  selectPromoTotal,
} from "../courses.selector";
import { AppState } from "../../reducers";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
=======
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import {CourseEntityService} from '../services/course-entity.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> b1078a1f5296fe020164725c3a7d57745dda413b
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

<<<<<<< HEAD
  loading$: Observable<boolean>;
=======
    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;
>>>>>>> b1078a1f5296fe020164725c3a7d57745dda413b

  beginnerCourses$: Observable<Course[]>;

<<<<<<< HEAD
  advancedCourses$: Observable<Course[]>;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}
=======
    constructor(
      private dialog: MatDialog,
      private coursesService: CourseEntityService) {
>>>>>>> b1078a1f5296fe020164725c3a7d57745dda413b

  ngOnInit() {
    this.reload();
  }

  reload() {
    const courses$ = this.store.pipe(select(selectAllCourses));

<<<<<<< HEAD
    this.loading$ = courses$.pipe(map((courses) => !!courses));

    this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

    this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

    this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
=======
    this.beginnerCourses$ = this.coursesService.entities$
      .pipe(
        map(courses => courses.filter(course => course.category == 'BEGINNER'))
      );

    this.advancedCourses$ = this.coursesService.entities$
      .pipe(
        map(courses => courses.filter(course => course.category == 'ADVANCED'))
      );

    this.promoTotal$ = this.coursesService.entities$
        .pipe(
            map(courses => courses.filter(course => course.promo).length)
        );

>>>>>>> b1078a1f5296fe020164725c3a7d57745dda413b
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Create Course",
      mode: "create",
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
