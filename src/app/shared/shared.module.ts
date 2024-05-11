import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgSelectModule
  ],
  exports: [
    RouterModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgSelectModule
  ]
})
export class SharedModule { }
