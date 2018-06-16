import { Component, OnInit } from '@angular/core';
import { ThService } from '../../../services/th.service'
import { ThDataModel } from '../../../models/thdatamodel'

@Component({
  selector: 'app-thdata',
  templateUrl: './thdata.component.html',
  styleUrls: ['./thdata.component.scss']
})
export class ThdataComponent implements OnInit {

   data: Array<ThDataModel>;

  constructor(private thService : ThService) { }

  ngOnInit() {
  	this.thService.getAllThData(3,1);
  	this.thService.allThData.subscribe(data => this.data = data);
  }

}
