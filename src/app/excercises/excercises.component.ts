import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs/operators';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit {

  nr1s:any [];
  nr2s:any [];
  operators:string [];
  excercises:string [];

  constructor(public settings: SettingsService) {}
  
  ngOnInit() {
    this.createNr1s();
    this.createNr2s();
    this.createOperators();
    this.createExcercises();
  }

  private createNr1s () {
    this.nr1s = [];
    for (let key in this.settings.getBase()) {
      if (this.settings.getBase()[key]) {this.nr1s.push(key);}
    }
  }
  private createNr2s () {
    this.nr2s = [];
    for (var a=0; a <= this.settings.getMaxMultiplier(); a++) {
      this.nr2s.push(a);
    }
  }
  private createOperators() {
    this.operators = ['*'];
    if (this.settings.getDevide()) { this.operators.push('/') }
  }

  private createExcercises () {
    this.excercises = [];
    for (let o of this.operators) {
      for (let nr1 of this.nr1s) {
        for (let nr2 of this.nr2s) {
          if (!(o == '/' && nr2 == 0)) {
            this.excercises.push(nr1 + o + nr2);
          }
        }
      }
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