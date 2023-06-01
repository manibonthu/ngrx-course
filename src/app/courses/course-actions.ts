import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction("[load all course]");

export const allCourseLoaded = createAction(
  "[Course Resolver] courses loaded",
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{ update: Update<Course> }>()
);
