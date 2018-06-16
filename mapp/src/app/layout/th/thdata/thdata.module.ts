import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThdataRoutingModule } from './thdata-routing.module';
import { ThdataComponent } from './thdata.component';
import { ThService } from '../../../services/th.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, ThdataRoutingModule
  ],
  declarations: [ThdataComponent],
  providers: [ThService],
  exports: [ThdataComponent]
})
export class ThdataModule { }
 

