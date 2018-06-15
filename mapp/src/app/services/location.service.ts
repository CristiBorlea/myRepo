import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LocationModel } from '../models/locationmodel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ThService } from './th.service';

@Injectable()
export class LocationService {

	private selectedLocationSource = new BehaviorSubject<number>(1);
	selectedLocation = this.selectedLocationSource.asObservable();

  constructor(private httpClient: HttpClient, private router:Router, private thService:ThService) { }

  getAllLocations(): Observable<LocationModel>{
  	return this.httpClient.get<LocationModel>('http://localhost:8080/location/all');
  }

  changeLocation(newLocationId: number){
  	console.log('changelocation ' + newLocationId);
  	this.selectedLocationSource.next(newLocationId);
  	this.thService.getLastThData(1, newLocationId);
  }

}
