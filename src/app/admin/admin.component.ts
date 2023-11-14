// admin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users:any = [];

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers();
  }

  navigateToDetail(userId: any) {
    this.router.navigate(['/detail', userId]);
  }
  

  
}
