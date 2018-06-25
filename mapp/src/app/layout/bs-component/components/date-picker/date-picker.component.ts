import { Component, OnInit, Input} from '@angular/core';
import { DatepickerService } from '../../../../services/datepicker.service';


@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

 	@Input() page: string;

    modelStart: any;
    modelEnd: any;

    constructor(private datepickerService: DatepickerService) {}

    ngOnInit() {}

    onStartDateChange(event:any){
    	this.datepickerService.changeStartDate(event, this.page);
    }

    onEndDateChange(event:any){
    	this.datepickerService.changeEndDate(event, this.page);
    }
}
