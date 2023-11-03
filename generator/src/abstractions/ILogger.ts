export interface ILogger {
  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  success(...args: unknown[]): void;
  debug(...args: unknown[]): void;
  warning(...args: unknown[]): void;
  error(...args: unknown[]): void;
}
