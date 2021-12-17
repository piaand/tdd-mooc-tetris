import {
  formatStringToShape,
  findLengthOfSide,
} from "./services/shapeServices.mjs";
export class RotatingShape {
  blueprint;
  side;

  constructor(blueprint) {
    this.side = findLengthOfSide(blueprint);
    this.flatShape = blueprint.replace(/\s/gm, "");
  }

  toString() {
    return formatStringToShape(this.flatShape, this.side);
  }

  rotateRight() {
    const shapeString = this.flatShape;
    const shapeLength = shapeString.length;
    let newShapeString = new Array(shapeLength + 1).join(".");

    for (var i = 0; i < shapeLength; i++) {
      //convert to x/y
      var x = i % this.side;
      var y = Math.floor(i / this.side);

      //find new x/y
      var newX = this.side - y - 1;
      var newY = x;

      var newPosition = newY * this.side + newX;
      newShapeString =
        newShapeString.substr(0, newPosition) +
        shapeString[i] +
        newShapeString.substr(newPosition + 1);
    }
    this.flatShape = newShapeString;
    return this;
  }

  rotateLeft() {
    const shapeString = this.flatShape;
    const shapeLength = shapeString.length;
    let newShapeString = new Array(shapeLength + 1).join(".");

    for (var i = 0; i < shapeLength; i++) {
      //convert to x/y
      var x = i % this.side;
      var y = Math.floor(i / this.side);

      //find new x/y
      var newY = this.side - x - 1;
      var newX = y;

      var newPosition = newY * this.side + newX;
      newShapeString =
        newShapeString.substr(0, newPosition) +
        shapeString[i] +
        newShapeString.substr(newPosition + 1);
    }
    console.log(newShapeString);
    this.flatShape = newShapeString;
    return this;
  }
}
