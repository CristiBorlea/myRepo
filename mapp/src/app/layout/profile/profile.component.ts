import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/usermodel';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	
  private user:UserModel;

  constructor(private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
  	this.user=this.loginService.getLoggedInUser();
  }

  updateProfile(){
  	this.userService.updateProfile(this.user);
  }

}
