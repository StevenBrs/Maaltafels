import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  score = {};

  constructor() {
    this.clearScore();
  }

  public clearScore() {
    this.score = {};
  }
  public addScore(type: string, result: boolean) {
    if (result) {
      //this.score[type]["good"]++;
    } else {
      //this.score[type]["bad"]++;
    }
  }
}
