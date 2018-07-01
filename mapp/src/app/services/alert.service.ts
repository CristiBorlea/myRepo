import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AlertModel } from '../models/alertmodel';
import { AlarmService } from './alarm.service';
import { UserService } from './user.service';


@Injectable()
export class AlertService {

    private allAlertsSource = new BehaviorSubject < Array < AlertModel >> (new Array < AlertModel > ());
    public allAlerts = this.allAlertsSource.asObservable();

    constructor(private userService: UserService, private httpClient: HttpClient) {}

    getAllAlerts() {
        let userId = this.userService.getCurrentUserId();
        return this.httpClient.get < AlertModel > ('http://localhost:8080/alarm/alerts?userId=' + userId)
            .subscribe(
                (alerts: any) => {
                    this.allAlertsSource.next(alerts);
                    console.dir(alerts);
                },
                (err) => {
                    console.log('Cannot retrieve active alarms for user')
                });

    }
}
