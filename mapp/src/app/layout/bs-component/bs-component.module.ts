import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from './components';
import { PageHeaderModule } from '../../shared';
import { LocationDropdownComponent } from './components/location-dropdown/location-dropdown.component';
import { LocationService } from '../../services/location.service';
import { ThService } from '../../services/th.service';
import { UserService } from '../../services/user.service';
import { DatepickerService } from '../../services/datepicker.service';
import { AlertService } from '../../services/alert.service';
import { AlarmService } from '../../services/alarm.service';


@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    exports: [DropdownComponent, LocationDropdownComponent,DatePickerComponent, AlertComponent],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent,
        LocationDropdownComponent,
    ],
     providers: [LocationService, ThService, UserService, DatepickerService, AlertService, AlarmService]
})
export class BsComponentModule {}
