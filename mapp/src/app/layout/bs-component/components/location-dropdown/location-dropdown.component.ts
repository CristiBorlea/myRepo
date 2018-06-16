import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { LocationModel } from '../../../../models/locationmodel';
import { LocationService } from '../../../../services/location.service';
import { ThService } from '../../../../services/th.service';
import { DashboardDataService } from '../../../../services/dashboard-data.service';


@Component({
    selector: 'app-location-dropdown',
    templateUrl: './location-dropdown.component.html',
    styleUrls: ['./location-dropdown.component.scss']
})
export class LocationDropdownComponent implements OnInit {

    @Input() page: string;

    private locations: any;
    private selectedLocation: number;


    constructor(private locationService: LocationService, private dashboardDataService: DashboardDataService) {}

    ngOnInit() {
        this.locationService.getAllLocations()
            .subscribe(
                (allLocations: LocationModel) => {
                    this.locations = allLocations;
                }
            );
        this.locationService.selectedLocation.subscribe(selLoc => this.selectedLocation = selLoc);
    }

    onLocationSelected(locationId: number) {
        console.log('on location select: ' + locationId);
        this.locationService.changeLocation(locationId, this.page);
    }

}
