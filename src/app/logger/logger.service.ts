import { Injectable } from '@angular/core';

import { Logger, LogLevel } from './logger';

@Injectable()
export class LoggerService extends Logger {

  public info(moduleName: string, message: string): void {
    const logMessage = this.buildLogMessage(LogLevel.Info, moduleName, message);
    console.log(logMessage);
  }

  public warn(moduleName: string, message: string): void {
    const logMessage = this.buildLogMessage(LogLevel.Warn, moduleName, message);
    console.warn(logMessage);
  }

  public error(moduleName: string, message: string): void {
    const logMessage = this.buildLogMessage(LogLevel.Error, moduleName, message);
    console.error(logMessage);
  }

  protected buildLogMessage(level: LogLevel, moduleName: string, message: string): string {
    const date = new Date().toLocaleString();

    return `${date} ${level}\t${moduleName}\t${message}`;
  }
}
