
export default class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  onDied: Function;

  constructor({ onDied = () => {} }) {
    this.element = document.getElementById('snake')!;
    this.head = document.getElementById('snake')!.querySelector('div')!;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    this.X = 0;
    this.Y = 0;

    this.onDied = onDied;
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    if (this.X === value) return;

    if (value < 0 || value > 290 || this.checkEatBody(value, this.Y)) {
      this.onDied();
      return;
    }

    this.bodyMove();
    this.head.style.left = value + 'px';
  }

  set Y(value) {
    if (this.Y === value) return;

    if (value < 0 || value > 290 || this.checkEatBody(this.X, value)) {
      this.onDied();
      return;
    }

    this.bodyMove();
    this.head.style.top = value + 'px';
  }

  addBody() {
    const newDiv = document.createElement('div');
    this.element.appendChild(newDiv);
  }

  bodyMove() {
    for (let index = this.bodies.length -1; index > 0; index--) {
      const preElement = this.bodies[index - 1] as HTMLElement;
      const X = preElement.offsetLeft;
      const Y = preElement.offsetTop;

      const element = this.bodies[index] as HTMLElement;
      element.style.left = X + 'px';
      element.style.top = Y + 'px';
    }
  }

  checkEatBody(X: number, Y: number) {
    for (let index = 1; index < this.bodies.length; index++) {
      const element = this.bodies[index] as HTMLElement;
      if (element.offsetLeft === X && element.offsetTop === Y) {
        return true;
      }
    }
    return false;
  }

}
