import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserModel } from '../models/usermodel';

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
        this.loginService.getPasswordForEmail(this.email)
           .subscribe(
               (data:UserModel) => {
                   let dbPassword = data['password'].replace(/\s/g, '');
                   let uiPassword = this.password.replace(/\s/g, '');

                   if(dbPassword==uiPassword){
                       console.log('paswords equal');
                       this.loginService.getLoggedInUser(this.email);
                       this.router.navigate(['/dashboard']);
                       localStorage.setItem('isLoggedin', 'true');
                   }
                   else {
                       alert('Invalid password!');
                   }
               },
               (err) => {
                   alert('This user does not exist!');
               });
    }
}
