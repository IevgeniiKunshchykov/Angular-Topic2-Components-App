import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(user: string) {
    this.sub = this.authService
      .login(user)
      .subscribe(
        () => {
          if (this.authService.isLoggedIn) {
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
            this.router.navigate([redirect]);
          }
        });
  }

  onLogout() {
    this.authService.logout();
    this.removeSubscriptions();
  }

  ngOnDestroy(): void {
    this.removeSubscriptions();
  }

  private removeSubscriptions() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
