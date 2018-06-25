import { Component, OnInit } from '@angular/core';
import { ThService } from '../../../services/th.service'
import { ThDataModel } from '../../../models/thdatamodel'
import { UserService } from '../../../services/user.service'
import { LocationService } from '../../../services/location.service'

@Component({
    selector: 'app-thdata',
    templateUrl: './thdata.component.html',
    styleUrls: ['./thdata.component.scss']
})
export class ThdataComponent implements OnInit {

    private page: string = "datahistory";

    data: Array < ThDataModel > ;
    private locationId: number;

    constructor(private thService: ThService, private userService: UserService,
        private locationService: LocationService) {}

    ngOnInit() {
        this.locationService.selectedLocation
            .subscribe(selectedLocation => this.locationId = selectedLocation);
        let userId = this.userService.getCurrentUserId();
        this.thService.getAllThData(userId, this.locationId);
        this.thService.allThData.subscribe(data => this.data = data);
    }

}
