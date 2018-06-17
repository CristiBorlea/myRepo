import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ThDataModel } from '../models/thdatamodel';

@Injectable()
export class ThService {

    private lastThDataSource = new BehaviorSubject < ThDataModel > (new ThDataModel());
    public lastThData = this.lastThDataSource.asObservable();

    private lastThDataFoundSource = new BehaviorSubject < boolean > (false);
    public lastThDataFound = this.lastThDataFoundSource.asObservable();

    private allThDataSource = new BehaviorSubject < Array<ThDataModel> > (new Array<ThDataModel>());
    public allThData = this.allThDataSource.asObservable();

    constructor(private httpClient: HttpClient) {}

    getLastThData(userId: number, locationId: number) {
        return this.httpClient.get < ThDataModel > ('http://localhost:8080/data/last?userId=' + userId + '&locationId=' + locationId)
            .subscribe(
                (thData: ThDataModel) => {
                    this.lastThDataSource.next(thData);
                    this.lastThDataFoundSource.next(true);
                    console.log('get last thdata u=' + userId + " l=" + locationId);
                },
                (err) => {
                    this.lastThDataSource.next(new ThDataModel());
                    this.lastThDataFoundSource.next(false);
                    console.error('Cannot retrieve last th data.');
                });
    }

    getAllThData(userId: number, locationId: number) {
        return this.httpClient.get <Array<ThDataModel>> ('http://localhost:8080/data/all?userId=' + userId + '&locationId=' + locationId)
        .subscribe(
            (thData: Array<ThDataModel>) => {
                this.allThDataSource.next(thData);
                console.log('get all thdata u=' + userId + " l=" + locationId);
                console.dir(thData);
            },
            (err) => {
                this.allThDataSource.next(new Array<ThDataModel>());
                console.error('Cannot retrieve all th data.');
            });
    }
}
