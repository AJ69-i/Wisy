import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { EndpointService } from 'src/app/core/services/endpoint/endpoint.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    { provide: 'environment', useValue: environment },
    DatePipe,
    EndpointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
