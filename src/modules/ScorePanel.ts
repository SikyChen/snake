
// 记分牌的类
export default class ScorePanel {
  score = 0;
  level = 1;

  scoreElement: HTMLElement;
  levelElement: HTMLElement;

  maxLevel: number;
  upScore: number;

  constructor({maxLevel = 10, upScore = 2} = {}) {
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;

    this.score = 0;
    this.level = 1;
  }

  addScore() {
    this.scoreElement.innerText = ++this.score + '';
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElement.innerText = ++this.level + '';
    }
  }
}
