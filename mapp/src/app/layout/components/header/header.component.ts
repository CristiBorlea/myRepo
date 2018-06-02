import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    firstName: string;
    lastName: string;

    constructor( public router: Router, public loginService: LoginService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        //this.loginService.loggedInUser.subscribe(result => this.firstName = result);
       /* console.log("test" +this.loginService.loggedInUser.firstName);
        // this.firstName=this.loginService.loggedInUser.firstName;
        this.firstName='vila';
        this.lastName=this.loginService.loggedInUser.lastName;
        console.log("last name " +this.loginService.loggedInUser.lastName );*/
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
