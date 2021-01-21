import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService {
  settings = {
    base: {
      1: false,
      2: true,
      3: false,
      4: false,
      5: true,
      6: false,
      7: false,
      8: false,
      9: false,
      10: true
    },
    devide: true,
    maxmultiplier: 11
  };

  constructor() {}

  public getSettings() {
    return this.settings;
  }

  public getBase(nr?:number) {
    if (nr) {
      return this.settings.base[nr];
    } else {
      return this.settings.base;
    }
  }
  public setBase(nr:number, value:boolean) {
    this.settings.base[nr] = value;
  }

  public getMaxMultiplier() {
    return this.settings.maxmultiplier;
  }
  public setMaxMultiplier (nr:number) {
    this.settings.maxmultiplier = nr;
  }
}
