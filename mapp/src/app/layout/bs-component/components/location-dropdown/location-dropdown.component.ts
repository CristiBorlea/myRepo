import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LocationService } from '../../../../services/location.service';
import { LocationModel } from '../../../../models/locationmodel';


@Component({
    selector: 'app-location-dropdown',
    templateUrl: './location-dropdown.component.html',
    styleUrls: ['./location-dropdown.component.scss']
})
export class LocationDropdownComponent implements OnInit {

    locations: any;
    selectedLocation: number;

    constructor(private locationService: LocationService) {}

    ngOnInit() {
        this.locationService.getAllLocations()
        .subscribe(
          (allLocations: LocationModel)=>{
              this.locations = allLocations;
          }
        );
    }

    onLocationSelected(val:any){
    	console.log('on location sel: ' + val);
    }

}
