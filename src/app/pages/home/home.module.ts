import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectModule } from 'src/app/pages/select/select.module';
import { LoaderModule } from 'src/app/pages/loader/loader.module';
import { ChartModule } from 'src/app/pages/chart/chart.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SelectModule,
    LoaderModule,
    ChartModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
