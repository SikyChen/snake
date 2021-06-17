import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

export default class GameControl {
  // 定义要操作的属性

  isLive = true;

  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  direction = '';
  oppositeMap: {
    [k: string]: string,
  } = {
    'ArrowUp': 'ArrowDown',
    'ArrowDown': 'ArrowUp',
    'ArrowLeft': 'ArrowRight',
    'ArrowRight': 'ArrowLeft',
  }

  constructor() {
    this.snake = new Snake({
      onDied: this.onDied,
    });
    this.food = new Food();
    this.food.changePositon();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  init () {
    console.log('Start ...')
    document.addEventListener('keydown', this.keydownHandler);
    this.run();
  }

  reStart() {
    this.snake = new Snake({
      onDied: this.onDied,
    });
    this.food = new Food();
    this.food.changePositon();
    this.scorePanel = new ScorePanel();
    this.direction = '';

    this.isLive = true;
    // this.init();
  }

  onDied = () => {
    (document.getElementById('info') as HTMLElement).style.display = 'block';
    this.isLive = false;
    // this.reStart();
  }

  keydownHandler = (event: KeyboardEvent) => {
    if (this.oppositeMap[this.direction] === event.key && this.scorePanel.score > 0) return;
    this.direction = event.key;
    // this.run();
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
        Y = Y - 10;
        break;
      case 'ArrowLeft':
        X = X - 10;
        break;
      case 'ArrowDown':
        Y = Y + 10;
        break;
      case 'ArrowRight':
        X = X + 10;
        break;
    }

    this.checkEat(X, Y);

    this.snake.X = X;
    this.snake.Y = Y;

    this.isLive && setTimeout(() => {
      this.run()
    }, 200 - (this.scorePanel.level * 10));
  }

  // 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y) {
      console.log('吃到食物了');
      this.food.changePositon();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }

}
