import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './components/select/select.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    SharedModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
