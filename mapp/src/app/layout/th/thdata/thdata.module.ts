import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsComponentModule } from '../../bs-component/bs-component.module';
import { ThdataRoutingModule } from './thdata-routing.module';
import { ThdataComponent } from './thdata.component';
import { UserService } from '../../../services/user.service';
import { ThService } from '../../../services/th.service';


@NgModule({
  imports: [
    CommonModule, FormsModule, ThdataRoutingModule, BsComponentModule
  ],
  declarations: [ThdataComponent],
  providers: [ThService, UserService],
  exports: [ThdataComponent]
})
export class ThdataModule { }
 

