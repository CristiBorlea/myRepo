import { Injectable } from '@angular/core';
import { ThService } from './th.service';
import { UserService } from './user.service';

@Injectable()
export class DashboardDataService {

	private userId: number;

    constructor(private thService: ThService, private userService: UserService) {}

    ngOnInit() {
    }

    refreshDashboardData(locationId: number) {
        this.userId = this.userService.getCurrentUserId();
        this.thService.getLastThData(this.userId, locationId);
        console.log('refreshDashboardData l=' + locationId + " u="+this.userId);
    }
}
