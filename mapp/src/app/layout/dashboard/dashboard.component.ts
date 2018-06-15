import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ThDataModel } from '../../models/thdatamodel';
import { ThService } from '../../services/th.service';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public sliders: Array < any > = [];
    public thData: ThDataModel;
    private currentDate: Date;
    private locationId: number = 3;
    private userId: number=1;
    private found: boolean = true;

    private selectedLocation: number;

    constructor(private thService: ThService, private locationService: LocationService) {
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
       /* this.locationService.selectedLocation.subscribe(selLoc => this.selectedLocation = selLoc);
        console.log('dashboard sellOC2= '+this.selectedLocation);*/
        this.refreshData();
        setInterval(() => {
            this.refreshData();
        }, 20000);
    }

    private refreshData() {
        this.locationService.selectedLocation.subscribe(selLoc => this.selectedLocation = selLoc);
        this.thData = new ThDataModel();
        this.getData();
        this.currentDate = new Date();
    }

    private getData() {
         this.thService.getLastThData(this.userId, this.selectedLocation);
        this.thService.lastThData.subscribe(thData => this.thData=thData);
       /* this.thService.getLastThData(this.userId, this.selectedLocation)
            .subscribe(
                (thData: ThDataModel) => {
                    this.thData = thData;
                    this.found = true;
                    console.log('get data u=' + this.userId + " l=" + this.locationId);
                },
                (err) => {
                    this.thData = new ThDataModel();
                    this.found = false;
                    console.error('Cannot retrieve last th data.');
                });*/
    }
}
