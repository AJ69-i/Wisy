import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EndpointInterceptor implements HttpInterceptor {

  constructor(@Inject('environment') private env: any) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
      url: this.env.baseUrl + request.url
    });
    return next.handle(modifiedReq);
  }
}
