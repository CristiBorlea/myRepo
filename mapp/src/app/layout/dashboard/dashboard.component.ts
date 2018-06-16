import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ThDataModel } from '../../models/thdatamodel';
import { ThService } from '../../services/th.service';
import { UserService } from '../../services/user.service';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    private page: string = "dashboard";
    public sliders: Array < any > = [];
    public thData: ThDataModel;
    private currentDate: Date;
    private userId: number;
    private selectedLocation: number;
    private foundData: boolean;

    constructor(private thService: ThService, private userService: UserService, private locationService: LocationService) {
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
        this.refreshData();
        setInterval(() => {
            this.refreshData();
        }, 30000);
    }

    private refreshData() {
        this.thData = new ThDataModel();
        this.currentDate = new Date();

        this.thService.lastThData.subscribe(thData => this.thData = thData);
        this.thService.lastThDataFound.subscribe(foundData => this.foundData = foundData);
        this.userId = this.userService.getCurrentUserId();
        this.locationService.selectedLocation.subscribe(selectedLocation => this.selectedLocation = selectedLocation);

         this.thService.getLastThData(this.userId, this.selectedLocation);
    }
}
