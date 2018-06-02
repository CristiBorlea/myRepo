import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { routerTransition } from '../router.animations';
import { RegisterService } from '../services/register.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    @Input() firstName: string;
    @Input() lastName: string;
    @Input() email: string;
    @Input() address: string;
    @Input() phone: string;
    @Input() password: string;
    @Input() passwordRepeat: string;

    constructor(private registerService: RegisterService) {}

    ngOnInit() {}

    register() {
        console.log('register' + this.firstName);
       	if (!(this.firstName && this.lastName && this.email && this.address && this.phone && this.password && this.passwordRepeat)) {
            alert('Please fill in all the fields!');
            return;
        }
        if (!(this.password == this.passwordRepeat)) {
            alert('Password repeat does not match!');
            return;
        }
        this.registerService.register(this.firstName, this.lastName, this.email, this.address, this.phone, this.password);
    }
}
