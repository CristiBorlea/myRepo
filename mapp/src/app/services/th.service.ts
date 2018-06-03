import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ThDataModel } from '../models/thdatamodel';

@Injectable()
export class ThService {

    data: any[] = [{ date: '1224', temp: 1, humid: 2 },
        { date: '1224', temp: 2, humid: 4 },
        { date: '1224', temp: 3, humid: 5 }
    ];

    constructor(private httpClient: HttpClient) {}

    getLastThData(deviceId: number) {
        return this.httpClient.get<ThDataModel>('http://localhost:8080/data/last/device?id=' + deviceId);
    }

    //TODO
    getThdata() {
        return this.data;
    }

    //TODO
    getUsers() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(
                (res: any[]) => {
                    console.log(res);
                    return res;
                })
        return [];
    }

    //TODO
    getUsers2(): Observable < any[] > {
        return this.httpClient.get < any[] > ('https://jsonplaceholder.typicode.com/users')
            .pipe(
                tap(heroes => console.log(`fetched users`)),
                catchError(this.handleError('getHeroes', []))
            );
    }

    //TODO
    private handleError < T > (operation = 'operation', result ? : T) {
        return (error: any): Observable < T > => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
