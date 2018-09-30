export abstract class Logger {
  abstract info(moduleName: string, message: string): void;
  abstract warn(moduleName: string, message: string): void;
  abstract error(moduleName: string, message: string): void;
  protected abstract buildLogMessage(level: LogLevel, moduleName: string, operation: string, message: string): void;
}

export enum LogLevel {
  Info = 'INFO',
  Warn = 'WARNING',
  Error = 'ERROR'
}
