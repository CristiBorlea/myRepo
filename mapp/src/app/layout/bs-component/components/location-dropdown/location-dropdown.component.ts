import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-location-dropdown',
    templateUrl: './location-dropdown.component.html',
    styleUrls: ['./location-dropdown.component.scss']
})
export class LocationDropdownComponent implements OnInit {

    locations: any =[
            { id: 1, name: "livingroom" },
            { id: 2, name: "bedroom" }
        ];
    selectedLocation: number;

    constructor() {}

    ngOnInit() {
        this.locations = [
            { id: 1, name: "livingroom" },
            { id: 2, name: "bedroom" }
        ];
        console.log(this.locations);
    }

    onLocationSelected(val:any){
    	console.log('on location sel: ' + val);
    }

}
