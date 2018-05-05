import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: '',
                text: ''
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Monitoring app succes alert`
            },
            {
                id: 2,
                type: 'warning',
                message: `Monitoring app warning alert`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
