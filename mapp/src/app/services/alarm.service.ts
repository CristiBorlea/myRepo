import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AlarmModel } from '../models/alarmmodel';

@Injectable()
export class AlarmService {

  constructor(private httpClient: HttpClient) { }

  getAllAlarms(): Observable<AlarmModel>{
  	return this.httpClient.get<AlarmModel>('http://localhost:8080/alarm/all');
  }
}
