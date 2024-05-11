import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderRoutingModule } from './loader-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    LoaderRoutingModule,
    SharedModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
