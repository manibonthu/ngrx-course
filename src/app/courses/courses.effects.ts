import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { allCourseLoaded } from "./course-actions";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesHttp: CoursesHttpService
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap((action) => this.coursesHttp.findAllCourses()),
      map((courses) => allCourseLoaded({ courses }))
    )
  );

  updateCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.courseUpdated),
        concatMap((action) =>
          this.coursesHttp.saveCourse(action.update.id, action.update.changes)
        )
      ),
    { dispatch: false }
  );
}
