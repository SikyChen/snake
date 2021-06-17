// 定义类 Food
export default class Food {
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并赋值给element
    this.element = document.getElementById('food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  changePositon() {
    const left = Math.floor((Math.random() * 30)) * 10;
    const top = Math.floor((Math.random() * 30)) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
