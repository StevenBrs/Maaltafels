import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {

  maxMultiplier:number;


  constructor(public settings: SettingsService) {
    this.maxMultiplier = this.settings.getMaxMultiplier();
  }

  ngOnInit() {}

  public getSettings() {
    return this.settings;
  }

  public AsIsOrder (a, b) {
    return 1;
  }

  public toggleNumber (nr) {
    this.settings.setBase(nr, !this.settings.getBase(nr));
  }
  public setMaxMultiplier() {
    this.settings.setMaxMultiplier(this.maxMultiplier);
  }
}
