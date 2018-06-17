import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserModel } from '../../models/usermodel';
import { ThService } from '../../services/th.service';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})

export class TablesComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}
