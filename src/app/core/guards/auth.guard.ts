import { Injectable } from '@angular/core';
import {
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad,
    Route,
    ActivatedRoute,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';

import { CoreModule } from '../core.module';
import { AuthService } from './../services/auth.service';

@Injectable({
    providedIn: CoreModule
})
export class AuthGuard implements CanActivateChild, CanLoad {
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const { url } = state;
        return this.checkLogin(url);
    }

    canLoad(route: Route, segments): Observable<boolean> | Promise<boolean> | boolean {
        const url = `/${route.path}`;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
    }
}
