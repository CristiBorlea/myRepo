import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { LocationService } from '../../services/location.service';
import { UserService } from '../../services/user.service';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule, BsComponentModule],
    declarations: [ChartsComponent],
    providers: [LocationService, UserService]
})
export class ChartsModule {}