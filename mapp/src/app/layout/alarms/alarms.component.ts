import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss'],
  animations: [routerTransition()]
})
export class AlarmsComponent implements OnInit {

	public status: boolean;

  constructor() { }

  ngOnInit() {
  	this.status=true;
  }

  changeStatus(){
  	this.status=!this.status;
  }

}
