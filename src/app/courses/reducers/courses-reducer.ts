import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { allCourseLoaded, courseUpdated } from "../course-actions";
import { compareCourses, Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCourseState = adapter.getInitialState({
  allCoursesLoaded: false,
});


export const coursesReducer = createReducer(
  initialCourseState,
  on(allCourseLoaded, (state, action) =>
    adapter.addAll(action.courses, {
      ...state,
      allCoursesLoaded: true,
    })
  ),
  on(courseUpdated, (state, action) => adapter.updateOne(action.update, state))
);

export const { selectAll } = adapter.getSelectors();
