import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit {

  nr1s:any [];
  nr2s:any [];

  constructor(public settings: SettingsService) {}
  
  ngOnInit() {
    let base = this.settings.getBase();
    this.nr1s = [];
    for (let key in this.settings.getBase()) {
      if (this.settings.getBase()[key]) {this.nr1s.push(key);}
    }
  }

  public getNr1 ():number {
    var i:number = Math.floor(Math.random()*this.nr1s.length);
    return this.nr1s[i];
  }

  public AsIsOrder (a, b) {
    return 1;
  }
}