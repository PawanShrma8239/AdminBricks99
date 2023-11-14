import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DetailComponent } from './detail/detail.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent}, // Redirect to admin by default
  { path: 'admin', component: AdminComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'adminlogin', component: AdminLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 
