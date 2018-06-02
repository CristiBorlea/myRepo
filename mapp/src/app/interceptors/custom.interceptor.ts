import { Injectable, NgModule } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercept: " );
        console.dir(req)

        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET, POST, PUT, OPTIONS'
        });
        const cloneReq = req.clone({ headers });
        
        /*const cloneReq = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});*/
        
        console.dir(cloneReq);
        return next.handle(cloneReq);
    }
}
