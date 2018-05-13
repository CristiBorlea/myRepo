import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThdataComponent } from './thdata.component';

const routes: Routes = [
    {
        path: '', component: ThdataComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThdataRoutingModule { }