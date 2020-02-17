import { AuthFacade } from '@mdv17/core-state';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export default class AuthGuard {

  constructor(
    private facade: AuthFacade,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.facade.authenticated$
      .pipe(
        first(),
        tap((result: boolean) => !result
          ? this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
          : null
        )
      );
  }
}
