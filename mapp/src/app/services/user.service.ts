import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel';
import { LoginService } from './login.service';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient, private router:Router, private loginService: LoginService) { }

  getCurrentUser(){
      return JSON.parse(localStorage.getItem('currentUser'));
  }

  getCurrentUserId(){
      return this.getCurrentUser()["id"];
  }

  updateProfile(userModel:UserModel){
	this.httpClient.post<UserModel>('http://localhost:8080/user/update', userModel)
            .subscribe(
            	(user: UserModel) => {
                alert('User succesfully updated!');
                this.refreshUser(userModel.email);
                this.router.navigate(['/dashboard']);
            },
            (err) => {
                alert('Update failed!');
            });

    }

  refreshUser(email:string){
  	this.httpClient.get<UserModel>('http://localhost:8080/user?email=' + email)
  		.subscribe(
	  		(user: any) => {
  			 	localStorage.setItem('currentUser', JSON.stringify(user));	
	  		},
	  		(err) => {
                alert('Update failed!');
	        });
  }

}

