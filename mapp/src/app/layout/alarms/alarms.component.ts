import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AlarmModel } from '../../models/alarmmodel';
import { AlarmService } from '../../services/alarm.service';
import { UserService } from '../../services/user.service';
import { LocationService } from '../../services/location.service';


@Component({
    selector: 'app-alarms',
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    animations: [routerTransition()]
})
export class AlarmsComponent implements OnInit {

    allAlarms: any;
    allLocations: any;

    type: string = "temperature";
    minValue: number;
    maxValue: number;
    active: boolean = true;
    locationId: number = 1;
    userId: number;

    constructor(private alarmService: AlarmService, private userService: UserService, 
        private locationService: LocationService) {}

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.initLocations();
        this.initAlarms();
    }

    initLocations(){
        this.locationService.getAllLocations()
            .subscribe(
                (allLocations: any) => {
                    this.allLocations = allLocations;
                }
            );
    }

    initAlarms() {
        this.alarmService.getAllAlarms();
        this.alarmService.allAlarms.subscribe(allAlarms => this.allAlarms = allAlarms);
    }

    onChange(active: any, alarmId: any) {
        this.alarmService.setActive(alarmId, active);
    }

    onRemove(alarmId: any) {
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
        this.alarmService.createAlarm(this.type, this.minValue, this.maxValue, this.active, this.userId, this.locationId)
            .subscribe(
                (alarm: any) => {
                    this.initAlarms();
                },
                (err) => {
                    alert('Alarm cannot be created!');
                });
        this.clearFields();    
    }

    clearFields(){
        this.type="temperature";
        this.locationId=this.allLocations[0].id;
        this.minValue=0;
        this.maxValue=0;
        this.active=true;
    }
}
