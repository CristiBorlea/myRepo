import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ThDataModel } from '../../models/thdatamodel';
import { ThService } from '../../services/th.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public sliders: Array < any > = [];
    public thData: ThDataModel;
    private deviceId: number = 1;

    constructor(private thService: ThService) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: '',
            text: ''
        });
    }

    ngOnInit() {
        this.thService.getLastThData(1) //TODO selected device id instead of 1
            .subscribe(
                (thData: ThDataModel) => {
                    this.thData = thData;
                },
                (err) => {
                    this.thData = new ThDataModel();
                    console.error('Cannot retrieve last th data.');
                });
    }
}
