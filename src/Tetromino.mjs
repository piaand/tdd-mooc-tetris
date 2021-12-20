import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino extends RotatingShape {
	shape; // No idea on how to do: const shape = Tetromino.T_SHAPE;
	static T_SHAPE = () => {
	  this.shape = new RotatingShape(
		`.T.
	TTT
	...`)
	  }
	constructor(shape) {
		shape()
	}
  }
