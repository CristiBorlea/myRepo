import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { ThdataModule } from '../th/thdata/thdata.module';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, ThdataModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
