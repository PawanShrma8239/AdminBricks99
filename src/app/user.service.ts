// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phno: '123-456-7890', status: '' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phno: '987-654-3210', status: '' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phno: '555-123-4567', status: '' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phno: '789-012-3456', status: '' },
    { id: 5, name: 'Charlie White', email: 'charlie@example.com', phno: '234-567-8901', status: '' },
    { id: 6, name: 'David Lee', email: 'david@example.com', phno: '876-543-2109', status: '' },
    { id: 7, name: 'Eva Davis', email: 'eva@example.com', phno: '111-222-3333', status: '' },
    { id: 8, name: 'Frank Brown', email: 'frank@example.com', phno: '444-555-6666', status: '' },
    { id: 9, name: 'Grace Taylor', email: 'grace@example.com', phno: '777-888-9999', status: '' },
    { id: 10, name: 'Harry Adams', email: 'harry@example.com', phno: '123-789-4560', status: '' },
    { id: 11, name: 'Ivy Clark', email: 'ivy@example.com', phno: '098-765-4321', status: '' },
    { id: 12, name: 'Jack Turner', email: 'jack@example.com', phno: '135-246-7890', status: '' },
    { id: 13, name: 'Karen Miller', email: 'karen@example.com', phno: '987-654-3210', status: '' },
    { id: 14, name: 'Leo Martinez', email: 'leo@example.com', phno: '111-222-3333', status: '' },
    { id: 15, name: 'Mia Garcia', email: 'mia@example.com', phno: '444-555-6666', status: '' },
    { id: 16, name: 'Nathan Hall', email: 'nathan@example.com', phno: '777-888-9999', status: '' },
    { id: 17, name: 'Olivia Walker', email: 'olivia@example.com', phno: '123-789-4560', status: '' },
    { id: 18, name: 'Peter Scott', email: 'peter@example.com', phno: '098-765-4321', status: '' },
    { id: 19, name: 'Quinn Perez', email: 'quinn@example.com', phno: '135-246-7890', status: '' },
    { id: 20, name: 'Rachel Smith', email: 'rachel@example.com', phno: '987-654-3210', status: '' }
    // Add more users here
];


  getUsers() {
    return this.users;
  }

  updateUserStatus(userId: number, newStatus: string) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = newStatus;
    }
  }
}

