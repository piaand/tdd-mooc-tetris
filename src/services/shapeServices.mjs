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
