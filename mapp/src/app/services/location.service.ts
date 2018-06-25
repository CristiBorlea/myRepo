import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocationModel } from '../models/locationmodel';
import { ThService } from './th.service';
import { UserService } from './user.service';

@Injectable()
export class LocationService {

	private selectedLocationSource = new BehaviorSubject<number>(1);
	selectedLocation = this.selectedLocationSource.asObservable();

  constructor(private httpClient: HttpClient, private router:Router, private thService:ThService,
   private userService:UserService) { }

  getAllLocations(): Observable<LocationModel>{
  	return this.httpClient.get<LocationModel>('http://localhost:8080/location/all');
  }

  changeLocation(locationId: number, page:string){
  	console.log('changelocation ' + locationId + " " + page);
  	this.selectedLocationSource.next(locationId);
    let userId= this.userService.getCurrentUserId();
    if (page == "dashboard") {
       this.thService.getLastThData(userId, locationId);
    } 
    else if (page == "datahistory") {
       this.thService.getAllThData(userId, locationId);
    }
    else if (page == "charts") {
       this.thService.getAllThData(userId, locationId);
    }
  }

}
