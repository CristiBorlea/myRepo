import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { PageHeaderModule } from './../../shared';
import { AlarmsComponent } from './alarms.component';
import { AlarmsRoutingModule } from './alarms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiSwitchModule,
    PageHeaderModule,
    AlarmsRoutingModule
  ],
  declarations: [AlarmsComponent]
})
export class AlarmsModule { }
