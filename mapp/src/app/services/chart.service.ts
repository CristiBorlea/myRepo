import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ThDataModel } from '../models/thdatamodel';
import { UserService } from './user.service';
import { ThService } from './th.service';
import { LocationService } from './location.service';

@Injectable()
export class ChartService {

    private selectedLocation: number;

    private labelsSource = new BehaviorSubject<Array<any>>(new Array());
	labels = this.labelsSource.asObservable();

	private lineChartDataSource = new BehaviorSubject<Array<any>>(new Array());
    lineChartData = this.lineChartDataSource.asObservable();

    constructor(private userService: UserService, private thService: ThService, 
    	private locationService: LocationService) {}

    getChartData() {
        let userId = this.userService.getCurrentUserId();
        this.locationService.selectedLocation.subscribe(selectedLocation => this.selectedLocation = selectedLocation);
        this.thService.getAllThData(userId, this.selectedLocation);
        this.thService.allThData.subscribe(thData => {
        	this.parseThData(thData);
        });
    }

    parseThData(thData: Array<ThDataModel>){
    	console.log('parse data');
    	let newlabels = new Array();
    	let newTemperatures = new Array();
    	let newHumidities = new Array();
        for (var i = 0; i < thData.length; i++) {
            var data = thData[i];
            let dateTime = data["date"] +" "+ data["time"];
            newlabels.push(data["date"] +" "+ data["time"]);
            newTemperatures.push(data.temperature);
            newHumidities.push(data.humidity);
        }
        let newChartData = [{ data: newTemperatures, label: 'Temperature' },
        					{ data: newHumidities, label: 'humidity'}];
        this.labelsSource.next(newlabels);
        this.lineChartDataSource.next(newChartData);
    }
}
