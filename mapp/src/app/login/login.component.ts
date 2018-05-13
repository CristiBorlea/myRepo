import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

	@Input() email: string;
	@Input() password: string;

    constructor(public router: Router, public loginService:LoginService) {}

    ngOnInit() {
    }

    doLogin() {
    	if (this.isExistingUser()){
    		this.router.navigate(['/dashboard']);
    		localStorage.setItem('isLoggedin', 'true');
    	}
    	else {
    		alert('Invalid email or password!')
    	}
    }

	//TODO validate user from server
    isExistingUser(){
       this.loginService.getPasswordForEmail(this.email).subscribe(
           function(response){
               console.log(response);
                   //   if (dbPassword==this.password) {
                   //     return true;
                   //     }
                   //     else{

                   //         return false;
                   // }
           });
      return false;
    } 
}
