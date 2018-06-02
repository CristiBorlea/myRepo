import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { RegisterService } from '../services/register.service'

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule
  ],
  providers: [RegisterService],
  declarations: [SignupComponent]
})
export class SignupModule { }
