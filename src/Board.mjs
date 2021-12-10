
const BOARD_FILLER = '.'
const START_ROW = 0
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = []
  }

  setBlocks(blocks){
    this.blocks = blocks
  }

  drawEmptyBoard(){
    let row = ''
    for (var i = 0; i < this.width; i++){
      row += BOARD_FILLER
    }
    row += '\n'
    let board = ''
    for(var i = 0; i < this.height; i++){
      board += row
    }
    return board
  }

  drawBlockOnBoard(block, boardDrawing) {
    let blockFiller = block.color
    let coordinates = block.getCoordinates()
    let rowLen = this.width + 1  
    let index = rowLen * coordinates.y + coordinates.x
    return boardDrawing.substring(0, index) + blockFiller + boardDrawing.substring(index + 1);
  }

  toString() {
    let board = this.drawEmptyBoard()
    this.blocks.forEach(block => {
      board = this.drawBlockOnBoard(block, board)
    });
    return board;
  }

  addBlockToBoard(block) {
    let oldBlocs = this.blocks
    let newBlocs = oldBlocs.concat(block)
    this.setBlocks(newBlocs)
  }
  
  getBoardMiddle(width) {
    return Math.floor(width / 2)
  }

  drop(block) {
    let x = this.getBoardMiddle(this.width)
    let y = START_ROW
    block.setCoordinates(x, y)
    block.toggleFall()
    this.addBlockToBoard(block)
  }

  tick(){
    let fallingBlocks = this.blocks.filter(block => block.falling)
    if(fallingBlocks?.length === 0) {
      throw Error("no blocks placed on the board")
    }
    else if(fallingBlocks.length > 1){
      throw Error("already falling")
    } else {
      let block = fallingBlocks[0]
      let coordinates = block.getCoordinates()
      block.setCoordinates(coordinates.x, ++coordinates.y)
    }
  }
}
