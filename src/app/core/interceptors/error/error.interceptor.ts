import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import * as iziToast from "iziToast";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe (
      catchError((error) => {
        if(error instanceof HttpErrorResponse) {
          if(error.error instanceof ErrorEvent) {
            console.log("An Error Event Occured");
          }
          else {
            switch(error.status) {
              case 400:
                iziToast.default.error({
                  title: "Error",
                  message: "Bad Request",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeInLeft',
                  transitionOut: 'fadeOutRight',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
                case 401:
                iziToast.default.error({
                  title: "Error",
                  message: "Unauthorized",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeInLeft',
                  transitionOut: 'fadeOutRight',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
                case 402:
                iziToast.default.error({
                  title: "Error",
                  message: "Payment Required",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeInLeft',
                  transitionOut: 'fadeOutRight',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
                case 403:
                iziToast.default.error({
                  title: "Error",
                  message: "Forbidden",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeInLeft',
                  transitionOut: 'fadeOutRight',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
                case 404:
                iziToast.default.error({
                  title: "Error",
                  message: "Fetching Weather periods fails",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeInLeft',
                  transitionOut: 'fadeOutRight',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
                case 405:
                iziToast.default.error({
                  title: "Error",
                  message: "Method Not Allowed",
                  timeout: 3000,
                  position: 'topRight',
                  transitionIn: 'fadeIn',
                  transitionOut: 'fadeOutLeft',
                  drag: true,
                  transitionInMobile: 'fadeInDown',
                  transitionOutMobile: 'fadeOutDown',
                });
                break;
            }
          }
        }
        else {
          console.log("An Error Occured");
        }
        return throwError( () => new Error(error.statusCode) );
      }
      )
    );
  }
}
