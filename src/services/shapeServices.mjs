export const Direction = {
  Right: 'RIGHT',
  Left: 'LEFT'
}

export const findLengthOfSide = (shapeString) => {
  const shape = String(shapeString);
  const index = shape.search(/\s/);
  if (index < 2) {
    throw Error(`Not a valid shape to rotate: ${shapeString}`);
  }
  return index;
};

export const formatStringToShape = (flatShape, sideLen) => {
  const shape = String(flatShape);
  if (!shape || shape.length < 4 || /\s/.test(shape)) {
    throw Error(`Not a valid flat shape to format: ${shape}`);
  }
  const partCount = shape.length / sideLen;
  const subStringArr = [];
  for (var i = 0; i < partCount; i++) {
    let startIndex = i * sideLen;
    let endIndex = startIndex + sideLen;
    let row = shape.slice(startIndex, endIndex) + "\n";
    subStringArr.push(row);
  }
  return subStringArr.join("");
};

export const rotateShape90degreesTo = (direction, shapeString, side) => {
  if(!Object.values(Direction).includes(direction.toUpperCase())){
    throw Error(`Not valid rotation direction: ${direction}`)
  }
    const shapeLength = shapeString.length;
    let newShapeString = new Array(shapeLength + 1).join(".");

    for (var i = 0; i < shapeLength; i++) {
      //convert to x/y
      var x = i % side;
      var y = Math.floor(i / side);

      //find new x/y
      if(direction.toUpperCase() === Direction.Left){
        var newY = side - x - 1;
        var newX = y;
      } else {
        var newX = side - y - 1;
        var newY = x;
      }
      

      var newPosition = newY * side + newX;
      newShapeString =
        newShapeString.substr(0, newPosition) +
        shapeString[i] +
        newShapeString.substr(newPosition + 1);
    }
    const shapeWithNewLine = newShapeString.substr(0, side) + '\n' + newShapeString.substr(side)
    return shapeWithNewLine
}