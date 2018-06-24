import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AlarmService } from '../../services/alarm.service';
import { AlarmModel } from '../../models/alarmmodel';


@Component({
    selector: 'app-alarms',
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    animations: [routerTransition()]
})
export class AlarmsComponent implements OnInit {

    allAlarms: any;

    newAlarmType: string;
    newAlarmLocation: string;
    newAlarmMinValue: number;
    newAlarmMaxValue: number;
    newAlarmActive: any = true;


    constructor(private alarmService: AlarmService) {}

    ngOnInit() {
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
                    alert('Alarm succesfully removed!');
                    this.initAlarms();
                },
                (err) => {
                    alert('Alarm cannot be removed!');
                });
    }

    addAlarm() {
        console.log("add alarm");
    }

}
