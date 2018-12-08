'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height + 'px';
    this.width = width + 'px';
    this.bg = bg;
    this.fontSize = fontSize + 'px';
    this.textAlign = textAlign;
  }
  calcArea() {

    let div = document.createElement('div'),
      body = document.querySelector('body');
    div.textContent = 'some text';
    body.appendChild(div);
    div.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      color: ${this.bg};
      font-size: ${this.fontSize};
      text-align: ${this.textAlign};
      `;
  }
}

let square = new Options('200', '200', 'red', '24', 'center');

square.calcArea();

