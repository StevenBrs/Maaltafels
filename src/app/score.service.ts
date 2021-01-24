import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  results = {};

  constructor() {
  }

  public clearScore() {
    this.results = {};
  }
  public addScore(exc: string, operator: string, answer: string, check: boolean) {
    this.results[exc] = {'answer': answer, 'check': check, 'operator': operator};
    console.log(this.results);
  }

  public getResults () {
    return this.results;
  }
  public getScore(type?: string) {
    var total:number = 0;
    var correct: number = 0;
    if (typeof type !== 'undefined') {
      for (let result of Object.keys(this.getResults())) {
        if (this.results[result].operator == type) {
          total++;
          if (this.results[result].check) {
            correct++;
          }
        }
      }
    } else {
      total = Object.keys(this.getResults()).length;
      var correct: number = 0;
      for (let result of Object.keys(this.getResults())) {
        if (this.results[result].check) {
          correct++;
        }
      }
    }
    return correct + " / " + total;
  }
}
