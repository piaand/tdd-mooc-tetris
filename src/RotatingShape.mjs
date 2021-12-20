import {
  formatStringToShape,
  findLengthOfSide,
  rotateShape90degreesTo,
  Direction
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
    const rotatedShape = rotateShape90degreesTo(Direction.Right, this.flatShape, this.side)
    return new RotatingShape(rotatedShape);
  }

  rotateLeft() {
    const rotatedShape = rotateShape90degreesTo(Direction.Left, this.flatShape, this.side)
    return new RotatingShape(rotatedShape);
  }
}
