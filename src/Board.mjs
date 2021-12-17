import { areaIsTaken } from "./services/boardServices.mjs";

const BOARD_FILLER = ".";
const START_ROW = 0;
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = [];
  }

  setBlocks(blocks) {
    this.blocks = blocks;
  }

  drawEmptyBoard() {
    let row = "";
    for (var i = 0; i < this.width; i++) {
      row += BOARD_FILLER;
    }
    row += "\n";
    let board = "";
    for (var i = 0; i < this.height; i++) {
      board += row;
    }
    return board;
  }

  drawBlockOnBoard(block, boardDrawing) {
    let blockFiller = block.color;
    let coordinates = block.getCoordinates();
    let rowLen = this.width + 1;
    let index = rowLen * coordinates.y + coordinates.x;
    return (
      boardDrawing.substring(0, index) +
      blockFiller +
      boardDrawing.substring(index + 1)
    );
  }

  toString() {
    let board = this.drawEmptyBoard();
    this.blocks.forEach((block) => {
      board = this.drawBlockOnBoard(block, board);
    });
    return board;
  }

  hasFalling() {
    let fallingBlock = this.blocks.find((block) => block.falling);
    return Boolean(fallingBlock);
  }

  addBlockToBoard(block) {
    let oldBlocs = this.blocks;
    let newBlocs = oldBlocs.concat(block);
    this.setBlocks(newBlocs);
  }

  getBoardMiddle(width) {
    return Math.floor(width / 2);
  }

  drop(block) {
    let fallingBlocks = this.blocks.filter((block) => block.falling);
    if (fallingBlocks.length > 0) {
      throw Error("already falling");
    } else {
      let x = this.getBoardMiddle(this.width);
      let y = START_ROW;
      block.setCoordinates({ x, y });
      block.toggleFall();
      this.addBlockToBoard(block);
    }
  }

  tick() {
    const block = this.blocks.find((block) => block.falling);
    const coordinates = block.getCoordinates();
    const newCoordinates = { x: coordinates.x, y: coordinates.y + 1 };

    // the board has ended or there is another block in the way
    if (
      newCoordinates.y === this.height ||
      areaIsTaken(newCoordinates, this.blocks)
    ) {
      block.toggleFall();
    } else {
      block.setCoordinates(newCoordinates);
    }
  }
}
