import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/usermodel';


@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient) {

    }

    login(email: string): Observable < UserModel > {
        return this.httpClient.get<UserModel>('http://localhost:8080/user?email=' + email);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
    }

    getLoggedInUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
