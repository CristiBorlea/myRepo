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
    newAlarmActive: any;


    constructor(private alarmService: AlarmService) {}

    ngOnInit() {
      this.newAlarmActive=true;
      this.initAlarms();
    }

    initAlarms() {
        this.alarmService.getAllAlarms()
            .subscribe(
                (allAlarms: AlarmModel) => {
                    this.allAlarms = allAlarms;
                     console.log(this.allAlarms);
                },
                (err) => {
                    this.allAlarms = new Array();
                    console.log('Cannot retrieve all alarms.');
                });
    }

    onChange(active:any, alarmId:any){
      console.log("on change " + active + " " + alarmId);
    }

    onRemove(alarmId:any){
      console.log("on remove " + alarmId);
    }

    addAlarm(){
      console.log("add alarm");
    }

}
