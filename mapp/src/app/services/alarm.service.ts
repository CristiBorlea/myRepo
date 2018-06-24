import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AlarmModel } from '../models/alarmmodel';

@Injectable()
export class AlarmService {

    constructor(private httpClient: HttpClient) {}

    private allAlarmsSource = new BehaviorSubject < Array < AlarmModel >> (new Array < AlarmModel > ());
    public allAlarms = this.allAlarmsSource.asObservable();

    getAllAlarms() {
        this.httpClient.get < AlarmModel > ('http://localhost:8080/alarm/all')
            .subscribe(
                (allAlarms: any) => {
                    this.allAlarmsSource.next(allAlarms);
                    console.log("All alarms retrieved: " + allAlarms);
                },
                (err) => {
                    this.allAlarmsSource.next(new Array < AlarmModel > ());
                    console.log('Cannot retrieve all alarms.');
                });
    }

    setActive(alarmId: number, isActive: boolean) {
        this.httpClient.post('http://localhost:8080/alarm/active', {
                id: alarmId,
                active: isActive
            })
            .subscribe(
                (alarm: any) => {
                    alert('Alarm succesfully updated!');
                },
                (err) => {
                    alert('Alarm cannot be updated!');
                });
    }

    removeAlarm(alarmId: number) {
        return this.httpClient.delete('http://localhost:8080/alarm/remove?alarmId=' + alarmId);
    }
}
