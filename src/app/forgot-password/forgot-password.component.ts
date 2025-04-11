import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private router: Router) {}

  isModalOpen: boolean = false;

  onResetPassword(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false; 
  }

}
