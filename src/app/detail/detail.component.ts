// detail.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  user:any = null;

  constructor(private route: ActivatedRoute, private userService: UserService,private router:Router) {
    this.route.params.subscribe(params => {
      const userId = parseInt(params['id']);
      this.user = this.userService.users.find((u: { id: number; }) => u.id === userId);
    });
  }


  updateStatus(newStatus: string) {
    if (this.user) {
      this.userService.updateUserStatus(this.user.id, newStatus);
      this.user.status = newStatus; // Update the status locally
    }
    this.router.navigate(['/admin']);
  }
}
