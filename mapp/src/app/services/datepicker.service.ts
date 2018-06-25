import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from './user.service';
import { ThService } from './th.service';
import { LocationService } from './location.service';

@Injectable()
export class DatepickerService {

	userId: number;
	locationId: number;

    startDate: string;
    endDate: string;

    constructor(private userService: UserService, private thService: ThService, 
    	private locationService: LocationService) {}

    changeStartDate(json: any, page: string) {
        this.startDate=this.formatDate(json);
        console.log(this.startDate);
        this.refreshThData();
    }

    changeEndDate(json: any, page: string) {
        this.endDate=this.formatDate(json);
        console.log(this.endDate);
        this.refreshThData();
    }

    refreshThData(){
    	this.userId = this.userService.getCurrentUserId();
        this.locationService.selectedLocation.subscribe(selectedLocation => this.locationId = selectedLocation);
        this.thService.getAllThDataForInterval(this.userId, this.locationId, this.startDate, this.endDate);
    }

    formatDate(json:any){
    	if (json==null)
    		return "";
    	else
    		return json['year']+"-"+json['month']+"-"+json['day'];
    }

}
