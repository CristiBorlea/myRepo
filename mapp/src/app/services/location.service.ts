import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocationModel } from '../models/locationmodel'

@Injectable()
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getAllLocations(): Observable<LocationModel>{
  	return this.httpClient.get<LocationModel>('http://localhost:8080/location/all');
  }

}
