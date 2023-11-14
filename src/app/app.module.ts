import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { UserService } from './user.service';


import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    AdminLoginComponent,
 
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
