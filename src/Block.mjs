export class Block {
  color;
  coordinates;
  falling;

  /*
  b... (starting point (b) from left to right, up to down: x = 0, y = 0)
  ....
  ...p (ending point (p) from left to right, up to down: x = 3, y = 2)
  */
  constructor(color) {
    this.color = color;
    this.coordinates = {
      x: 0,
      y: 0,
    };
    this.falling = false;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coordinates) {
    this.coordinates = coordinates;
  }

  toggleFall() {
    this.falling = !this.falling;
  }
}
