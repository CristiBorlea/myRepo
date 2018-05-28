import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserModel } from '../../models/usermodel';
import { ThService } from '../../services/th.service';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
	@Input() firstName:string;
	@Input() lastName:string;

    constructor(public router: Router,public thService:thService) {}

    ngOnInit() {}
}

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