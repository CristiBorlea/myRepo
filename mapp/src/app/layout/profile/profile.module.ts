import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile.component';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers:[LoginService,UserService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
