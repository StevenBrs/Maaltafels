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
  answer:string = "";
  check: Boolean;
  solution: string ="";

  constructor(public settings: SettingsService) {}
  
  ngOnInit() {
    
    this.createNr1s();
    this.createNr2s();
    this.createOperators();
    this.createExcercises();
  }

  public getExcercise() {
    return this.excercises[0];
  }
  public getExcerciseDisplay () {
    return this.getExcercise().replace('*', ' x ').replace('/', ' : ');
  }
  public addAnswer (a) {
    this.answer += String(a);
  }
  public rmAnswer () {
    this.answer = "";
  }
  public checkAnswer() {
    this.check = (eval(this.getExcercise()) == this.answer);
    this.solution = this.getExcerciseDisplay() + " = " + eval(this.getExcercise());
    this.answer = "";
    if (this.excercises.length > 1) {
      this.excercises.splice(0,1);
    } else {
      //nav away
    }
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
          if (o == '/') {
            this.excercises.push((nr1*nr2) + o + nr1)
          } else if (o != '/') {
            this.excercises.push(nr1 + o + nr2);
          }
        }
      }
    }
    this.shuffleExcercises();
  }
  private shuffleExcercises() {
    var shuffled: string [] = [];
    while (this.excercises.length > 0) {
      var rIndex = Math.floor(Math.random() * this.excercises.length);
      shuffled.push(this.excercises[rIndex]);
      this.excercises.splice(rIndex, 1);
    }
    this.excercises = shuffled;
  }

  public getNr1 ():number {
    var i:number = Math.floor(Math.random()*this.nr1s.length);
    return this.nr1s[i];
  }

  public AsIsOrder (a, b) {
    return 1;
  }
}