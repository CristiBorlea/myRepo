import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../services/alert.service';


@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    alerts: Array < any > = [];

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        setInterval(() => {
            console.log('receive alerts');
            this.alertService.getAllAlerts();
        }, 10000);
        this.alertService.allAlerts.subscribe(alerts => this.alerts = alerts);
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
