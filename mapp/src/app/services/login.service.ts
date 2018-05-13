import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private httpClient:HttpClient) 
  { 

  }

  getPasswordForEmail(email:string):Observable<string>{
  	return this.httpClient.get<string>('http://localhost:8080/user/password/'+email);
  }
}
