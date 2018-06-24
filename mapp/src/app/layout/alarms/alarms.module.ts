import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { PageHeaderModule } from './../../shared';
import { AlarmsComponent } from './alarms.component';
import { AlarmsRoutingModule } from './alarms-routing.module';
import { AlarmService } from '../../services/alarm.service';
import { UserService } from '../../services/user.service';


@NgModule({
  imports: [
    CommonModule,
    UiSwitchModule,
    PageHeaderModule,
    AlarmsRoutingModule
  ],
  declarations: [AlarmsComponent],
  providers: [AlarmService, UserService]
})
export class AlarmsModule { }
