import chalk from "chalk";
import { ILogger } from "../abstractions/ILogger";

const logColors: Record<string, chalk.ChalkFunction> = {
  log: (v => v) as chalk.ChalkFunction,
  info: chalk.blueBright,
  error: chalk.red,
  warning: chalk.yellow,
  debug: chalk.gray,
  success: chalk.green
};

const colorizePlaceholders = (type: string, string: string) => {
  return string.replace(/\%[a-zA-Z]/g, match => {
    return logColors[type](match);
  });
};

export class ConsoleLogger implements ILogger {
  private prefix?: string;

  constructor(prefix?: string) {
    this.prefix = prefix;
  }

  log(...args: unknown[]) {
    this.print("log", ...args);
  }

  info(...args: unknown[]) {
    this.print("info", ...args);
  }

  success(...args: unknown[]) {
    this.print("success", ...args);
  }

  debug(...args: unknown[]) {
    this.print("debug", ...args);
  }

  warning(...args: unknown[]) {
    this.print("warning", ...args);
  }

  error(...args: unknown[]) {
    this.print("error", ...args);
  }

  private print(type: string, ...args: unknown[]) {
    const prefix = [this.prefix, `[${this.getTimestamp()}]`, `${logColors[type](type)}: `]
      .filter(Boolean)
      .join(" ");

    const [first, ...rest] = args;
    if (typeof first === "string") {
      return console.log(prefix + colorizePlaceholders(type, first), ...rest);
    }
    return console.log(prefix, first, ...rest);
  }

  private getTimestamp() {
    return new Date().toTimeString().split(" ").shift();
  }
}
