import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toast: NgToastService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAuthenticated = !!localStorage.getItem("myToken");
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      this.toast.warning({
        detail: "Erreur msg !!",
        summary: "You have to login to access this page"
      });

    }
    return isAuthenticated;
  }

}
