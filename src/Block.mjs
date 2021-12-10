export class Block {
  color;

  constructor(color) {
    this.color = color;
    this.x = 0
    this.y = 0
    this.falling = false
  }

  getCoordinates(){
    return {x: this.x, y: this.y}
  }

  setCoordinates(x, y){
    this.x = x
    this.y = y
  }

  toggleFall(){
    this.falling = !(this.falling)
  }
}
