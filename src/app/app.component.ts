import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;
  isForgotPasswordPage: boolean = false;
  isHomePage: boolean = false;
  isSettingsPage: boolean = false;
  isProfilePage: boolean = false;
  isDashboardPage: boolean = false;
  isReportPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.isLoginPage = currentRoute === '/login';
      this.isRegisterPage = currentRoute === '/register';
      this.isForgotPasswordPage = currentRoute === '/forgot-password';
      this.isHomePage = currentRoute === '/home';
      this.isSettingsPage = currentRoute === '/settings';
      this.isProfilePage = currentRoute === '/profile';
      this.isDashboardPage = currentRoute === '/dashboard';
      this.isReportPage = currentRoute === '/reports';
    });
  }
}