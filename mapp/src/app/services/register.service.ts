import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/usermodel';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {

    constructor(private router: Router, private httpClient: HttpClient) {}

    register(firstName: string, lastName: string, email: string, address: string, phone: string, password: string) {
        this.httpClient.post < UserModel > ('http://localhost:8080/user/create', {
                firstName: firstName,
                lastName: lastName,
                address: address,
                phone: phone,
                email: email,
                password: password
            })
            .subscribe(
            	(user: any) => {
                alert('User succesfully created!');
                this.router.navigate(['/login']);
            },
            (err) => {
                alert('Register failed!');
            });

        }
}
