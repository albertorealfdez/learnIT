import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(protected loggerService: LoggerService) {}

  public handleError<T>(error: Error | HttpErrorResponse, serviceName: string = '', operation: string = ''): Observable<T> {
    this.loggerService.error(
      serviceName,
      `${operation} - ${this.buildErrorMessage(error)}`
    ); // TODO: move message log building to logging service

    return Observable.throw(error);
  }

  private buildErrorMessage(error: Error | HttpErrorResponse): string {
    let message = '';

    if (error instanceof HttpErrorResponse) {
      message += `${error.status} detected - ${error.message}`;
    } else {
      message += `${error.message}`;
    }

    return message;
  }
}
