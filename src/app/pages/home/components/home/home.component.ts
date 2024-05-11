import { Subscription } from 'rxjs';
import { EndpointService } from 'src/app/core/services/endpoint/endpoint.service';
import { Component, OnDestroy } from '@angular/core';
import * as iziToast from 'iziToast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  periods: any[] = [];
  private subscription!: Subscription;
  districtsOptions = [
    { id: 1, name: 'Columbia', forecast_office: 'LWX', color: '#499bd1' },
    { id: 2, name: 'Kansas', forecast_office: 'TOP', color: '#ee708b' },
  ];

  constructor(private Endpoint: EndpointService) {}

  getWeatherPeriods(district: string) {
    this.Endpoint.getData(district).subscribe({
      next: (response) => {
        if (response?.properties?.periods) {
          iziToast.default.success({
            title: 'SUCCESS',
            message: 'Fetching the weather periods OK',
            timeout: 3000,
            position: 'topRight',
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOutRight',
            drag: true,
            transitionInMobile: 'fadeInDown',
            transitionOutMobile: 'fadeOutDown',
          });
        }
        this.periods = response?.properties?.periods;
        let index = this.districtsOptions.findIndex((dis) => {
          return dis.forecast_office === district;
        });
        this.periods.push({ color: this.districtsOptions[index].color });
      },
    });
  }

  selectDistrict(district: string) {
    return district ? this.getWeatherPeriods(district) : undefined;
  }

  ngOnDestroy(): void {
    return this.subscription ? this.subscription.unsubscribe() : undefined;
  }
}
