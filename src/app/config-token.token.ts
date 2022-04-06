import { InjectionToken } from "@angular/core";

export interface Config {
  appName: string
}

export const ConfigToken = new InjectionToken<Config>('token')
