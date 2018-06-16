import { Component, OnInit } from '@angular/core';
import { ThService } from '../../../services/th.service'

@Component({
  selector: 'app-thdata',
  templateUrl: './thdata.component.html',
  styleUrls: ['./thdata.component.scss']
})
export class ThdataComponent implements OnInit {

   data: any[];

  constructor(private thService : ThService) { }

  ngOnInit() {
  	this.data = this.thService.getAllThData(3,1);
  }

}
