import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AlarmService } from '../../services/alarm.service';
import { UserService } from '../../services/user.service';
import { AlarmModel } from '../../models/alarmmodel';


@Component({
    selector: 'app-alarms',
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    animations: [routerTransition()]
})
export class AlarmsComponent implements OnInit {

    allAlarms: any;

    type: string;
    minValue: number;
    maxValue: number;
    active: boolean = true;
    locationId: number = 1;
    userId: number;

    constructor(private alarmService: AlarmService, private userService: UserService) {}

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.initAlarms();
    }

    initAlarms() {
        this.alarmService.getAllAlarms();
        this.alarmService.allAlarms.subscribe(allAlarms => this.allAlarms = allAlarms);
    }

    onChange(active: any, alarmId: any) {
        console.log("on change " + active + " " + alarmId);
        this.alarmService.setActive(alarmId, active);
    }

    onRemove(alarmId: any) {
        console.log("on remove " + alarmId);
        this.alarmService.removeAlarm(alarmId)
            .subscribe(
                (alarm: any) => {
                    this.initAlarms();
                },
                (err) => {
                    alert('Alarm cannot be removed!');
                });
    }

    addAlarm() {
        console.log("add alarm");
        this.alarmService.createAlarm(this.type, this.minValue, this.maxValue, this.active, this.userId, this.locationId)
            .subscribe(
                (alarm: any) => {
                    this.initAlarms();
                },
                (err) => {
                    alert('Alarm cannot be created!');
                });
    }

}
