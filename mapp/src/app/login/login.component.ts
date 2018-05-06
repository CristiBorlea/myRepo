import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

	@Input() email: string;
	@Input() password: string;

    constructor(public router: Router) {}

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
    	return (this.email=='admin' && this.password=='admin');
    }
}
