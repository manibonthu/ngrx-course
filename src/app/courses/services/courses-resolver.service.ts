import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

@Injectable({
  providedIn: "root",
})
export class CoursesResolverService implements Resolve<boolean> {
  constructor(private coursesService: CourseEntityService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.coursesService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
