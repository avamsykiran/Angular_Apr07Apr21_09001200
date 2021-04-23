import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //do here anythign to be done before the request leaves our client app.

    return next.handle(request).pipe(
      //do anything that has to be done after req is procced before the response is received.
      catchError( err => {
        console.log(err);
        throw "Could not complete the requested operation! Please try again later!";
      })
    ); 
  }
}
