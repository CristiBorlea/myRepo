import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { AlarmsComponent } from './alarms.component';
import { AlarmsRoutingModule } from './alarms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    AlarmsRoutingModule
  ],
  declarations: [AlarmsComponent]
})
export class AlarmsModule { }
