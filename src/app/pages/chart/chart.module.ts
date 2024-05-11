import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
