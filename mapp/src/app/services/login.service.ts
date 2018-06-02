import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/usermodel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class LoginService {

 /* private loggedInUserSource= new BehaviorSubject<UserModel>(new UserModel());*/
  loggedInUser: UserModel; //this.loggedInUserSource.asObservable();

  constructor(private httpClient:HttpClient) 
  { 

  }

  getPasswordForEmail(email:string):Observable<UserModel>{
  	return this.httpClient.get<UserModel>('http://localhost:8080/user/password?email='+email);
  }

  getLoggedInUser(email:string){
  	this.httpClient.get<UserModel>('http://localhost:8080/user/?email='+email)
  	.subscribe(
  			response => {
  				console.log(response);
  				this.loggedInUser = response;
  				console.log('getLoggedInUser');
  				console.dir(this.loggedInUser);
  	});
  }
}
