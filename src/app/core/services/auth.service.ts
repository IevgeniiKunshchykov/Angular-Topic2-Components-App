import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  isLoggedIn = false;

  user: string;
  redirectUrl: string;

  login(usr: string): Observable<boolean> {
    return of(true)
      .pipe(
        delay(500),
        tap(val => {
          this.user = usr;
          this.isLoggedIn = val;
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
