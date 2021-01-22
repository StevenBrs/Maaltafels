import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  score = {};

  constructor() {
    this.clearScore();
  }

  public clearScore() {
    this.score = {
      '*': [],
      '/': []
    };
  }
  public addScore(type: string, result: boolean) {
    if (!this.score[type]) { this.score[type] = [] }
    if (result) {
      this.score[type]["good"]++;
    } else {
      this.score[type]["bad"]++;
    }
  }

  public getScores (type?: string) {
    if (type) {
      return this.score[type];
    } else {
      return this.score;
    }
  }
}
