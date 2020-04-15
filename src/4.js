// measure the length of the square's line
const getShapeLength = shape => {
  // built-in js function to get the length
  return document.querySelector(shape).getTotalLength();	
};

console.log('hex: ', getShapeLength('.hex'));
console.log('square: ', getShapeLength('.square'));
