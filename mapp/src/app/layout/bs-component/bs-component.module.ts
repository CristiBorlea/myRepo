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

@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    exports: [DropdownComponent, LocationDropdownComponent],
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
     providers: [LocationService]
})
export class BsComponentModule {}
