import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let result: string;

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            result = 'succeeded';
          }
        },
        error => {
          result = 'failed';
        }
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        this.loggerService.warn('AppRequest', `Request for ${req.urlWithParams} ${result} in ${elapsed} ms.`);
      })
    );
  }
}
