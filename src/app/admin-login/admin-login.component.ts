// admin-login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  userId: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Simple mock authentication, replace this with your actual authentication logic
    if (this.userId === 'pawan' && this.password === 'pawan123') {
      // Redirect to admin home or dashboard after successful login
      this.router.navigate(['/admin']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
