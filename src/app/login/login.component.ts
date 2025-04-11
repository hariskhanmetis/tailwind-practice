import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/dashboard']);
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }

  onForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}